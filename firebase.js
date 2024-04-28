// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7nloXJ0aoMKMTSuLXsFzQOjidSB2W-YY",
  authDomain: "portfolio-a838c.firebaseapp.com",
  projectId: "portfolio-a838c",
  storageBucket: "portfolio-a838c.appspot.com",
  messagingSenderId: "433041784857",
  appId: "1:433041784857:web:c99fc09aa8c7c92d956a88",
  measurementId: "G-CYYKPTSRP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);