import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAX6iBehOjRGDbyE3HWUWXUsdiREZcICwM",
  authDomain: "smartai-private.firebaseapp.com",
  projectId: "smartai-private",
  storageBucket: "smartai-private.appspot.com",
  messagingSenderId: "52903428329",
  appId: "1:52903428329:web:478d1a15e4dbfa38c3078"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.sendMessage = async function () {

  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  let message = input.value;
  if (!message) return;

  if (message.startsWith("#HAFU#")) {

    let secretMessage = message.replace("#HAFU#", "").trim();

    await addDoc(collection(db, "secretMessages"), {
      text: secretMessage,
      timestamp: Date.now()
    });

    chatBox.innerHTML += `<p style="color:red">Secret Sent ❌</p>`;

  } else {

    chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
    chatBox.innerHTML += `<p><b>AI:</b> Hello! I am your smart AI assistant 🤖</p>`;
  }

  input.value = "";
};
