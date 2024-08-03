import * as admin from "firebase-admin";

const serviceAccount = require("../foo/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
