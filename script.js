function copyPrompt() {
  const el = document.getElementById("promptText");
  const temp = document.createElement("textarea");
  temp.value = el.innerText;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
  alert("Prompt copied. Execute.");
}
