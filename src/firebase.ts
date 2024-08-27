// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPxnvv7kIlgvFg7-RMROcuCTUFIOm8yVw",
  authDomain: "gest-9bc1e.firebaseapp.com",
  projectId: "gest-9bc1e",
  storageBucket: "gest-9bc1e.appspot.com",
  messagingSenderId: "853741126072",
  appId: "1:853741126072:web:f9acc0ea632d2b61ebcf4d",
  measurementId: "G-D80J66LJP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const realtimeDb = getDatabase(app);

