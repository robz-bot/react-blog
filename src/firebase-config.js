// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC_2J6mnnr01iu3pSUbjpO9_Psf6ehzdA",
  authDomain: "reactblog-e6521.firebaseapp.com",
  projectId: "reactblog-e6521",
  storageBucket: "reactblog-e6521.appspot.com",
  messagingSenderId: "122153675446",
  appId: "1:122153675446:web:0ca462f36f11bb866b9417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();