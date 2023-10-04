// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6936e.firebaseapp.com",
  projectId: "mern-auth-6936e",
  storageBucket: "mern-auth-6936e.appspot.com",
  messagingSenderId: "394902210993",
  appId: "1:394902210993:web:e63ed0cdbcdc07aa3b5590",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
