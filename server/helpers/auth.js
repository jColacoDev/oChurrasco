
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


exports.authCheck = async (req) => {
    try{
        const currentUser = await admin.auth().verifyIdToken(req.headers.authtoken);
        // console.log('Current User:', currentUser)
        // console.log('Current Token:', req.headers.authtoken)
        
        return currentUser;
    } catch(error){
        // console.log('AUTH CHECK ERROR', error)
        // console.log(req.headers.authtoken)
        throw new Error('Invalid or expired token');
    }
}
// exports.authCheck = (req, res, next = (f) => f) => {
//     if(!req.headers.authtoken) throw new Error('Unauthorized')
//     // token validity check
//     const valid = req.headers.authtoken === 'secret'    

//     if(!valid){
//         throw new Error('Unauthorized')
//     }else{
//         next();
//     }
// }

exports.authCheckMiddleware = (req, res, next) => {
    if(req.headers.authtoken){
        admin.auth().verifyIdToken(req.headers.authtoken)
            .then((result) => {
                next();
            })
            .catch((error) => console.log(error));
    } else {
        res.json({ error: 'Unauthorized'})
    }
}