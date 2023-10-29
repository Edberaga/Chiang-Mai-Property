// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chiang-mai-property-invest.firebaseapp.com",
  projectId: "chiang-mai-property-invest",
  storageBucket: "chiang-mai-property-invest.appspot.com",
  messagingSenderId: "640347358844",
  appId: "1:640347358844:web:97f9f47780c261cff4abf9",
  measurementId: "G-34949M1WQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);