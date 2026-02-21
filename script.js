function handleInput() {
  const inputField = document.getElementById("userInput");
  const input = inputField.value.trim();
  const chatBox = document.getElementById("chatBox");

  if (input === "") return;

  if (input === "#HAFU#") {
    chatBox.innerHTML += `<p style="color:red;">Secret Mode Activated ❌</p>`;
    inputField.value = "";
    return;
  }

  chatBox.innerHTML += `<p><b>You:</b> ${input}</p>`;
  chatBox.innerHTML += `<p><b>AI:</b> Hello! I am your smart AI assistant 🤖</p>`;
  inputField.value = "";
}
