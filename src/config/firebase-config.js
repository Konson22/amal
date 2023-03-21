import firebase from "firebase";

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
firebase.initializeApp(firebaseConfig);
firebase.analyics()

export default firebase