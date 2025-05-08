// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0mERV_TJh0IHV6jq140up-h9bsmD2hmU",
  authDomain: "drone-logbook-app.firebaseapp.com",
  projectId: "drone-logbook-app",
  storageBucket: "drone-logbook-app.firebasestorage.app",
  messagingSenderId: "952324640337",
  appId: "1:952324640337:web:146b7f0f83a0ba0413f270"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;