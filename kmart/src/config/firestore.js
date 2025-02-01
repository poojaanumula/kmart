// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhz3Dk8FKEUTKG0kxgyCUgcFe2wFwmRKo",
  authDomain: "kmart-8bc5b.firebaseapp.com",
  projectId: "kmart-8bc5b",
  storageBucket: "kmart-8bc5b.firebasestorage.app",
  messagingSenderId: "623055447534",
  appId: "1:623055447534:web:c2150594c89eb134e01aff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)