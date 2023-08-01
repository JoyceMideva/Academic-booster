// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNlueWElEf2L0ctIjiGPrYcw6XT4BIP8c",
  authDomain: "academic-booster-6cc3f.firebaseapp.com",
  projectId: "academic-booster-6cc3f",
  storageBucket: "academic-booster-6cc3f.appspot.com",
  messagingSenderId: "259851939351",
  appId: "1:259851939351:web:4febfd01f564b72d8c7652",
  measurementId: "G-NGQ51R2Q5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);