import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "smartai-private.firebaseapp.com",
  projectId: "smartai-private",
  storageBucket: "smartai-private.appspot.com",
  messagingSenderId: "52930428329",
  appId: "1:52930428329:web:478d1a15e4dbfa38c3078"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
  size: 'normal'
});

window.sendOTP = function () {
  const phoneNumber = document.getElementById('phoneNumber').value;
  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP Sent!");
    })
    .catch((error) => {
      alert(error.message);
    });
};

window.verifyOTP = function () {
  const code = document.getElementById('otp').value;

  window.confirmationResult.confirm(code)
    .then((result) => {
      localStorage.setItem("user", result.user.phoneNumber);
      window.location.href = "chat.html";
    })
    .catch((error) => {
      alert("Invalid OTP");
    });
};
