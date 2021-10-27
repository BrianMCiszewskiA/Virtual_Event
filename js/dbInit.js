// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCau3jxdrE1aoz0p_s2XDYle6TbPG9qlYU",
  authDomain: "eventassist-42b50.firebaseapp.com",
  projectId: "eventassist-42b50",
  storageBucket: "eventassist-42b50.appspot.com",
  messagingSenderId: "86546452983",
  appId: "1:86546452983:web:cf748a57585a1a2b075ef2",
  measurementId: "G-M45SGQVXGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);