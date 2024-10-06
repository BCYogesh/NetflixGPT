// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfd5sZ54EdxeTnPzZpSiZDHZWy2EvFjBg",
    authDomain: "neflixgpt-a4d5c.firebaseapp.com",
    projectId: "neflixgpt-a4d5c",
    storageBucket: "neflixgpt-a4d5c.appspot.com",
    messagingSenderId: "455768210544",
    appId: "1:455768210544:web:3d4eeceecd41f3976d08b5",
    measurementId: "G-XT4MCFCN5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();