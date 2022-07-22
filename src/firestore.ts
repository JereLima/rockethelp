// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import { AuthError, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  documentId,
  FirestoreError,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore/lite";
import { OrderDTO } from "./dtos/Orders";

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

export const sigIn = async () => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      "jeremiaslimag12@gmail.com",
      "123456"
    );
    return response.user;
  } catch (error) {
    const Error = error as AuthError;
    return Error.message;
  }
};

export const getOrders = async (statusSelected: "open" | "closed" = "open") => {
  try {
    const ordersCollection = collection(db, "orders");
    const q = query(
      ordersCollection,
      where("status", "==", statusSelected),
      orderBy('when','asc')
    );
    const orderSnapshot = await getDocs(ordersCollection);
    const orderList = orderSnapshot.docs.map((doc) => doc.data());
    return orderList as OrderDTO[];
  } catch (error) {
    const Error = error as FirebaseError;
    console.log(Error.message);
  }
};

export const createOrder = async (
  patrimony: string,
  when: string,
  description: string
) => {
  try {
    const ordersRef = await addDoc(collection(db, "orders"), {
      patrimony,
      description,
      when,
      status: "open",
    }).then((response) => {
    });
  } catch (error) {
    const Error = error as FirestoreError;
    console.error("Error adding document: ", Error.message);
  }
};
