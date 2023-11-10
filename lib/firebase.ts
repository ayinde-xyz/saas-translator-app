// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGKRBKa2T84ibOLSz8w3m3hpVb1Hc2ld4",
  authDomain: "saas-translator-app-d39ae.firebaseapp.com",
  projectId: "saas-translator-app-d39ae",
  storageBucket: "saas-translator-app-d39ae.appspot.com",
  messagingSenderId: "659797807060",
  appId: "1:659797807060:web:910b7b48faffc8ab06d041",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const funtions = getFunctions(app);

export { auth, db, funtions };
