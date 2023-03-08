const fs = require('fs').promises;
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');
const path = require('path');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), './googleServiceAccount.json');

async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
exports.gDrive_authorize = async (req) => {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

exports.getDriveDirectories = async (authClient, folderPath="Ergoface") => {
    const drive = google.drive({version: 'v3', auth: authClient});
    
    const folderQuery = `'root' in parents and mimeType='application/vnd.google-apps.folder' and name='${folderPath}'`;

    const filesRes = await drive.files.list({
      q: folderQuery,
      spaces: 'drive',
      fields: 'nextPageToken, files(id, name)',
    });
    const folderId = filesRes.data.files[0].id;
    const directoryQuery = `'${folderId}' in parents and mimeType='application/vnd.google-apps.folder'`
    const directoryRes = await drive.files.list({
        q: directoryQuery,
        spaces: 'drive',
        fields: 'nextPageToken, files(id, name)',
    });


    const files = directoryRes.data.files;
    if (files.length === 0) {
      console.log('No files found.');
      return;
    }
    console.log('Files:');
    files.map((file) => {
      console.log(`${file.name} (${file.id})`);
    });
}

exports.gDrive_listFiles = async (authClient) => {
  const drive = google.drive({version: 'v3', auth: authClient});
  
  const folderQuery = `'root' in parents and mimeType='application/vnd.google-apps.folder'`;
  
  const res = await drive.files.list({
    // pageSize: 10,
    q: folderQuery,
    spaces: 'drive',
    fields: 'nextPageToken, files(id, name)',
  });
  const files = res.data.files;
  if (files.length === 0) {
    console.log('No files found.');
    return;
  }

  console.log('Files:');
  files.map((file) => {
    console.log(`${file.name} (${file.id})`);
  });
}
