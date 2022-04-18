// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7Qwp2P_Zzeh0CZQKi_SI3KvYX2qIBvTY",
    authDomain: "selfie-studio-8d5b7.firebaseapp.com",
    projectId: "selfie-studio-8d5b7",
    storageBucket: "selfie-studio-8d5b7.appspot.com",
    messagingSenderId: "637170190070",
    appId: "1:637170190070:web:e9ab56a4c2f7e7c0430ed7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;