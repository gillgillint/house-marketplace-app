import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDegP8RIuu3RzJkOADToKkdLx3nqUjNUE4",
  authDomain: "house-marketplace-app-20d18.firebaseapp.com",
  projectId: "house-marketplace-app-20d18",
  storageBucket: "house-marketplace-app-20d18.appspot.com",
  messagingSenderId: "1033986279070",
  appId: "1:1033986279070:web:40d0602ef1ac09d3a09d8f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()