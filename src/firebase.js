 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSSQM17BbrWFIpVSbMPd6T9IntmF2haQ4",
    authDomain: "rc-evento.firebaseapp.com",
    projectId: "rc-evento",
    storageBucket: "rc-evento.appspot.com",
    messagingSenderId: "621462259403",
    appId: "1:621462259403:web:51a51f7388dd853286fd4e",
    measurementId: "G-F82PTLZXF3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };