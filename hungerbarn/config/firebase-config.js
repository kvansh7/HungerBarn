import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics"; 

const firebaseConfig = {
  apiKey: "AIzaSyBnltMmwqDXVWbdjpdDtc8xzKQS20Q_tYc",
  authDomain: "hungerbarn-a3647.firebaseapp.com",
  projectId: "hungerbarn-a3647",
  storageBucket: "hungerbarn-a3647.appspot.com",
  messagingSenderId: "1034294918772",
  appId: "1:1034294918772:web:ca0fe468e73354c5e8db21",
  measurementId: "G-G4HT79E790"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const analytics = getAnalytics(firebaseApp); 

export { firebaseApp, firestore, storage, analytics };
