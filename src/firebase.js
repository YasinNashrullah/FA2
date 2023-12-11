// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeBs2D06b-ADhA8tsrA7QovhW3pvOfiTE",
  authDomain: "web-kelas-a2.firebaseapp.com",
  projectId: "web-kelas-a2",
  storageBucket: "web-kelas-a2.appspot.com",
  messagingSenderId: "1005715044035",
  appId: "1:1005715044035:web:412cf754a36c6463b6d476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
