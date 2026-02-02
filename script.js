// ----------------------------
// COPY PROMPT BUTTON
// ----------------------------
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

// ----------------------------
// MOBILE PANEL (FAB)
// ----------------------------
const fab = document.querySelector(".emoji-fab");
const mobilePanel = document.querySelector(".mobile-panel");
const closeBtn = document.querySelector(".close-panel");

if (fab && mobilePanel && closeBtn) {
  fab.addEventListener("click", () => {
    mobilePanel.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    mobilePanel.classList.add("hidden");
  });
}

// ----------------------------
// MID-PAGE OPERATOR GATEWAY PANEL
// ----------------------------
document.querySelectorAll(".gateway-emoji").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank", "noopener");
    }
  });
});
