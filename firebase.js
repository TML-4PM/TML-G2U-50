import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "your-firebase-api-key",
  authDomain: "your-firebase-auth-domain",
  projectId: "your-firebase-project-id",
  storageBucket: "your-firebase-storage-bucket",
  messagingSenderId: "your-firebase-messaging-sender-id",
  appId: "your-firebase-app-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

export { auth, db, messaging };
