// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlPAL9IUiCOuINZa8PWwiudxrPgzHlBLU",
    authDomain: "myshop-378b4.firebaseapp.com",
    projectId: "myshop-378b4",
    storageBucket: "myshop-378b4.appspot.com",
    messagingSenderId: "31797348439",
    appId: "1:31797348439:web:4303b3aa3d82f5529ffb12"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }