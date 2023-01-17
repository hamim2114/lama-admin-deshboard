import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "admin-deshboard-4f2ef.firebaseapp.com",
  projectId: "admin-deshboard-4f2ef",
  storageBucket: "admin-deshboard-4f2ef.appspot.com",
  messagingSenderId: "306090386108",
  appId: "1:306090386108:web:6696c53cedce821a6526b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth();