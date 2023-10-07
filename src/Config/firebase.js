// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBC3nwb8SlUGTs1UFpGAbRKNAoYLE-6GQk",
    authDomain: "movie-searchbar.firebaseapp.com",
    projectId: "movie-searchbar",
    storageBucket: "movie-searchbar.appspot.com",
    messagingSenderId: "410319838072",
    appId: "1:410319838072:web:bdb4a71ba7e0b76392c68d",
    measurementId: "G-QKHZD40GEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
