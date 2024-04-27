// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkBjAa01Nxcsm-uJsQioeXCU5WuVxyQ-g",
    authDomain: "netflix-react-3be42.firebaseapp.com",
    projectId: "netflix-react-3be42",
    storageBucket: "netflix-react-3be42.appspot.com",
    messagingSenderId: "309920256263",
    appId: "1:309920256263:web:493621f294c69c078df5a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);