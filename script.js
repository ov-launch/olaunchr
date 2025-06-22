function startCountdownThenLaunch() {
  const countdown = document.getElementById("countdown");
  let seconds = 10;

  countdown.textContent = `⏳ Launching in ${seconds}...`;

  const launchTimer = setInterval(() => {
    seconds--;
    if (seconds >= 0) {
      countdown.textContent = `⏳ Launching in ${seconds}...`;
    } else {
      clearInterval(launchTimer);
      countdown.textContent = "🚀 Launch initiated!";
      launchNow(); // still calls your original function
    }
  }, 1000);
}
function launchNow() {
  const launchStatus = document.getElementById("status");
  launchStatus.textContent = "🟢 Launch successful!";
  launchStatus.style.color = "#00ff88";
}
