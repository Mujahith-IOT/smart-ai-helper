function handleInput() {
  const input = document.getElementById("userInput").value;
  const chatBox = document.getElementById("chatBox");

  if (input === "#HAFU#") {
    unlockSecret();
    return;
  }

  chatBox.innerHTML += `<p><b>You:</b> ${input}</p>`;
  chatBox.innerHTML += `<p><b>AI:</b> This is a demo AI response.</p>`;
  document.getElementById("userInput").value = "";
}

function unlockSecret() {
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += `<p style="color:red;">Secret Mode Activated ❌</p>`;
}
