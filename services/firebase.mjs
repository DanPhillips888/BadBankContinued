// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { connectAuthEmulator, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoy5K4CPw5aCJPJ8fmtYCEKjLzdcVqW1U",
  authDomain: "badbankdjp.firebaseapp.com",
  projectId: "badbankdjp",
  storageBucket: "badbankdjp.appspot.com",
  messagingSenderId: "364948890190",
  appId: "1:364948890190:web:e9438984204be56f11d91f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  console.log(userCredential.user);
}

btnLogin.addEventListener("click", loginEmailPassword);

// onAuthStateChanged(auth, user => {
//   // Check for user status
// });

module.exports = {loginEmailPassword}; 