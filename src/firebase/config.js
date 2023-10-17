import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// const firebaseConfig = {
//     apiKey: "AIzaSyCggZCcBun0cwNfOWGC2K8pZcgIRWMfqwY",
//     authDomain: "olx-sijeesh.firebaseapp.com",
//     projectId: "olx-sijeesh",
//     storageBucket: "olx-sijeesh.appspot.com",
//     messagingSenderId: "767411886432",
//     appId: "1:767411886432:web:2ef6862afc88f2c423a605",
//     measurementId: "G-4ELNR9DJHL"
//   };

//   export const Firebase= firebase.initializeApp(firebaseConfig)//named export

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqdB_icrRr0crL1HClYH3WesHuv5WDkyU",
  authDomain: "butrint-olx.firebaseapp.com",
  projectId: "butrint-olx",
  storageBucket: "butrint-olx.appspot.com",
  messagingSenderId: "825902704829",
  appId: "1:825902704829:web:6bad163ba831658cd7efd4",
  measurementId: "G-7ETR5DHWHP",
};

// Initialize Firebase
export const Firebase = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(Firebase);
