import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhMOvk4olR62RicBG5-CWp4W1qSVeMAYs",
  authDomain: "personalpass-5b239.firebaseapp.com",
  projectId: "personalpass-5b239",
  storageBucket: "personalpass-5b239.appspot.com",
  messagingSenderId: "417511939019",
  appId: "1:417511939019:web:66b69a32821f7cdb4b344e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default app;
export { auth, provider };
export { db, storage };
