// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQSTIlaJ7vZBwNeEkNTam_Sa4QKI1a0mY",
  authDomain: "forauth-6dc25.firebaseapp.com",
  projectId: "forauth-6dc25",
  storageBucket: "forauth-6dc25.appspot.com",
  messagingSenderId: "117328467715",
  appId: "1:117328467715:web:984b3e67db5f56d9297b36",
  measurementId: "G-V9S7BSDNC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);  // Initialize FireStore DB
const auth = getAuth(app);  // Initialize Firebase Authentication
export {fireDB,auth};
