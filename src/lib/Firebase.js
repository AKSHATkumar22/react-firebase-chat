import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-377fa.firebaseapp.com",
  projectId: "reactchat-377fa",
  storageBucket: "reactchat-377fa.appspot.com",
  messagingSenderId: "451629723165",
  appId: "1:451629723165:web:9b5cfadc8184b5acd4a0f4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
