// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBere5tXOyQtJCEPmiC8r9qGmc6KSmmEzs",
  authDomain: "bookshelf-bc296.firebaseapp.com",
  projectId: "bookshelf-bc296",
  storageBucket: "bookshelf-bc296.appspot.com",
  messagingSenderId: "15344390044",
  appId: "1:15344390044:web:0a010db789d70e0bc00259"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;