import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX6iBehOjRGDbyE3HWUWXUsdIREZcICwM",
  authDomain: "smartai-private.firebaseapp.com",
  projectId: "smartai-private",
  storageBucket: "smartai-private.firebasestorage.app",
  messagingSenderId: "52903428329",
  appId: "1:52903428329:web:478d1a15e4dbfaa38c3078",
  measurementId: "G-FBLR8XVZTB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// SIGN UP
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account Created!");
      window.location.href = "chat.html";
    })
    .catch((error) => alert(error.message));
};

// LOGIN
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "chat.html";
    })
    .catch((error) => alert(error.message));
};
