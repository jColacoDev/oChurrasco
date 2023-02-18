const fs = require(`fs`);
const FtpClient = require(`ftp`);
const glob = require(`glob`);

const EXPIRATION_DATE_IN_DAYS = 7;

const basePath = `./../client/dist`;
const destinationPath = `/web/spa`;
const config = {
  host: process.env.FTP_HOST,
  password: process.env.FTP_PASSWORD,
  user: process.env.FTP_USER,

  port: 21,
  connTimeout: 20000,
  pasvTimeout: 20000,
  aliveTimeout: 20000
};

const ftpClient = new FtpClient();

function createDirectory(destination) {
  return ftpClient.mkdir(destination, true, (error) => {
    if (error) throw error;

    ftpClient.end();
  });
}

function uploadFile(file, destination) {
  ftpClient.put(file, destination, (error) => {
    if (error) throw error;

    // eslint-disable-next-line no-console
    console.log(`${file} => ${destination}`);
    ftpClient.end();
  });
}

// Check if the path is a directory and
// either create the directory on the server
// if it is a directory, or upload the file
// if it is a file.
function handlePath(path) {
  const relativeFile = path.replace(`${basePath}/`, ``);
  const destination = `${destinationPath}/${relativeFile}`;

  if (fs.lstatSync(path).isDirectory()) {
    return createDirectory(destination);
  }

  return uploadFile(path, destination);
}

function isExpired(date) {
  const oneDayInMilliseconds = 86400000;
  const timestamp = new Date(date).getTime();
  const expirationTimestamp = Date.now() - (oneDayInMilliseconds * EXPIRATION_DATE_IN_DAYS);

  return timestamp < expirationTimestamp;
}

function cleanup(pathObject, directory) {
  if (pathObject.name === `.` || pathObject.name === `..`) return;

  const path = `${directory}/${pathObject.name}`;

  // If the current path is a directory
  // we recursively check the files in it.
  if (pathObject.type === `d`) {
    // eslint-disable-next-line no-use-before-define, consistent-return
    return cleanupRemoteDirectory(path);
  }

  if (isExpired(pathObject.date)) {
    ftpClient.delete(path, (error) => {
      if (error) throw error;

      // eslint-disable-next-line no-console
      console.log(`Removed: ${path}`);
      ftpClient.end();
    });
  }
}

function cleanupRemoteDirectory(directory) {
  return ftpClient.list(directory, (error, pathObjects) => {
    if (error) throw error;

    pathObjects.forEach(pathObject => cleanup(pathObject, directory));
    ftpClient.end();
  });
}
ftpClient.on( 'error', function(err) {
  console.log('error ==> ', err);
});

ftpClient.on(`ready`, () => {
  console.log("connection successful");
  // Get an array of all files and directories
  // in the given base path and send them to the
  // `handlePath()` function to decide if a
  // directory is created on the server or the
  // file is uploaded.
  glob.sync(`${basePath}/**/*`).forEach(handlePath);
  cleanupRemoteDirectory(destinationPath);
});

ftpClient.connect(config);