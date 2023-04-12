// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD70Gf9dsGhb8so52aHGIFQvpTktAIoNrg",
  authDomain: "mrpumpkin-98.firebaseapp.com",
  projectId: "mrpumpkin-98",
  storageBucket: "mrpumpkin-98.appspot.com",
  messagingSenderId: "924504847626",
  appId: "1:924504847626:web:9ca82445648b4cd83936f3",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
