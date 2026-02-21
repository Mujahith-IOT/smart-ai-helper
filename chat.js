import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore(app);

const user = localStorage.getItem("user");

if (!user) {
  window.location.href = "login.html";
}

const chatBox = document.getElementById("chat-box");

const q = query(collection(db, "messages"), orderBy("timestamp"));

onSnapshot(q, (snapshot) => {
  chatBox.innerHTML = "";
  snapshot.forEach((doc) => {
    const data = doc.data();
    chatBox.innerHTML += `<p><b>${data.user}:</b> ${data.text}</p>`;
  });
});

window.sendMessage = async function () {
  const messageInput = document.getElementById("message");
  const text = messageInput.value;

  if (!text) return;

  await addDoc(collection(db, "messages"), {
    user: user,
    text: text,
    timestamp: Date.now()
  });

  messageInput.value = "";
};
