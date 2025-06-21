function launchNow() {
  const status = document.getElementById("status");
  status.textContent = "òLegacy initiated...";
  status.style.color = "#00ff88";
  setTimeout(() => {
    status.textContent = "Extensions deployed. Narration engaged.";
  }, 2000);
}
