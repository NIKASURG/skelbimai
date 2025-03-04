// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwiFi6eBuGvbGDaY86JRz3i7YEpdPCmm4",
  authDomain: "skelbimushopas.firebaseapp.com",
  projectId: "skelbimushopas",
  storageBucket: "skelbimushopas.firebasestorage.app",
  messagingSenderId: "295685351413",
  appId: "1:295685351413:web:699a65c8570822047322bc",
  measurementId: "G-VNNWZTSD3V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);