// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAngucY6rWkNaH4Gyga23FasHq8vdTxNn0",
  authDomain: "react-firebase-todos-kim.firebaseapp.com",
  projectId: "react-firebase-todos-kim",
  storageBucket: "react-firebase-todos-kim.appspot.com",
  messagingSenderId: "240167913029",
  appId: "1:240167913029:web:43e3f4d3b652b32459852c",
  measurementId: "G-SZJDPGLCFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage()

export { app, db, storage }
