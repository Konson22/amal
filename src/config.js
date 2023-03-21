import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGbsGQXI2lXD0QE2JpXpUL5yFVxj0nwR4",
  authDomain: "amal-690c6.firebaseapp.com",
  projectId: "amal-690c6",
  storageBucket: "amal-690c6.appspot.com",
  messagingSenderId: "1025119512158",
  appId: "1:1025119512158:web:c2b5c5e15f367f6e9376cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);