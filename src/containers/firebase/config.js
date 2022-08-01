// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFHEqy9qqSf5kV-4E1PMswgVN_M656ovI",
  authDomain: "theprocess-web.firebaseapp.com",
  projectId: "theprocess-web",
  storageBucket: "theprocess-web.appspot.com",
  messagingSenderId: "205875497277",
  appId: "1:205875497277:web:c0563c6998a5c67d815d54",
  measurementId: "G-PB0LPQLY8F"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;