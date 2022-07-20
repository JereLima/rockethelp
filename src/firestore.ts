// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJOj9gygl1lvDbfq1r-2oXdQUB9jyjFd4",
  authDomain: "rockethelp-8aa20.firebaseapp.com",
  projectId: "rockethelp-8aa20",
  storageBucket: "rockethelp-8aa20.appspot.com",
  messagingSenderId: "1042851470288",
  appId: "1:1042851470288:web:d5b2979855c92a52e677d5",
  measurementId: "G-M63TCT6WGR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
