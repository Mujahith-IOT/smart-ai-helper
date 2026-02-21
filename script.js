// Firebase Module Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔥 Your Firebase Config
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Send Message Function
window.sendMessage = async function () {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  let message = input.value.trim();
  if (!message) return;

  // 🔐 SECRET MODE
  if (message.startsWith("#HAFU#")) {
    let secretMessage = message.replace("#HAFU#", "").trim();

    try {
      await addDoc(collection(db, "secretMessages"), {
        text: secretMessage,
        timestamp: Date.now()
      });

      chatBox.innerHTML += `<p style="color:red;">Secret Sent ❌</p>`;
    } catch (error) {
      console.error("Error saving secret message:", error);
      chatBox.innerHTML += `<p style="color:red;">Error sending secret</p>`;
    }
  } 
  // 🤖 NORMAL AI MODE
  else {
    chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
    chatBox.innerHTML += `<p><b>AI:</b> Hello! I am your smart AI assistant 🤖</p>`;
  }

  input.value = "";
};
