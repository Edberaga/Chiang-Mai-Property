// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.key.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.key.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.key.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.key.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.key.VITE_FIREBASE_SENDER_ID ,
  appId: import.meta.key.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.key.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);