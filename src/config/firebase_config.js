// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getFirestore}from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3lbm_l715mzFJNwP0lUuBX_42nqR0Q_w",
  authDomain: "user-management-18504.firebaseapp.com",
  projectId: "user-management-18504",
  storageBucket: "user-management-18504.appspot.com",
  messagingSenderId: "449552370836",
  appId: "1:449552370836:web:cca0c163fb9d3c16557881",
  measurementId: "G-0ME8918HQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();

export {app,db}