// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "devstore-100cd.firebaseapp.com",
  projectId: "devstore-100cd",
  storageBucket: "devstore-100cd.appspot.com",
  messagingSenderId: "683369336698",
  appId: "1:683369336698:web:969d2b3f4cd144c53710c3",
  measurementId: "G-S5PHC18YHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)