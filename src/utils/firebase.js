// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-prep-b347a.firebaseapp.com",
  projectId: "interview-prep-b347a",
  storageBucket: "interview-prep-b347a.firebasestorage.app",
  messagingSenderId: "977423324689",
  appId: "1:977423324689:web:73afabb9a0f2169f9583b0",
  measurementId: "G-EVSFTTCVVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {
    auth , provider
}