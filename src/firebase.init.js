// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCF_mFzI-UNpi9oSMhj6NX1D6jGB2LEq8w",
    authDomain: "router-firebase-integrat-b6379.firebaseapp.com",
    projectId: "router-firebase-integrat-b6379",
    storageBucket: "router-firebase-integrat-b6379.appspot.com",
    messagingSenderId: "84110668553",
    appId: "1:84110668553:web:e992e79ba1267c62d9d9d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;