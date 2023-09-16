import path from "path";
import * as admin from "firebase-admin";
import enviroment from 'enviroment';

const  { ENV, FIREBASE_SERVICE_ACCOUNT_KEY_FILE } = enviroment;

if (ENV !== 'production') {
  admin.initializeApp();
} else {
  admin.initializeApp({
    credential: admin.credential.cert(path.join(__dirname, FIREBASE_SERVICE_ACCOUNT_KEY_FILE)),
  });
}

const firestoreDb = admin.firestore();

export { admin, firestoreDb };
