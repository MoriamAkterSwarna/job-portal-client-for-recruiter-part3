// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu8QRbBs-5IR1q98pJ-oWI2cIi2Bo9kH4",
  authDomain: "job-portal-612aa.firebaseapp.com",
  projectId: "job-portal-612aa",
  storageBucket: "job-portal-612aa.firebasestorage.app",
  messagingSenderId: "453786620929",
  appId: "1:453786620929:web:b07a65d0a428cc6ea2dc00",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
