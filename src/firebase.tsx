import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "mahanaim-ed947.firebaseapp.com",
  projectId: "mahanaim-ed947",
  storageBucket: "mahanaim-ed947.firebasestorage.app",
  messagingSenderId: "729187474083",
  appId: "1:729187474083:web:12cb174f45bde1cd45bd16",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
