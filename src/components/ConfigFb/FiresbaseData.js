import { getFirestore} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrK5Lq5KkZ6PEXw-wBaAH0EOl0nWmclrQ",
    authDomain: "hardwarealegre.firebaseapp.com",
    projectId: "hardwarealegre",
    storageBucket: "hardwarealegre.appspot.com",
    messagingSenderId: "465989190026",
    appId: "1:465989190026:web:8fc546cafae70709bac873"
};


  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //selcciono la base de firestore
    export const DB = getFirestore(app);