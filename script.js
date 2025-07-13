// === Servo Control ===
function moveServo(x, y) {
  const current = document.getElementById("servoPosition").innerText.split(',').map(s => parseInt(s));
  const newX = Math.min(180, Math.max(0, current[0] + x));
  const newY = Math.min(180, Math.max(0, current[1] + y));
  document.getElementById("servoPosition").innerText = `${newX}°, ${newY}°`;
}
function resetServo() {
  document.getElementById("servoPosition").innerText = "90°, 90°";
}
// === Tracking ===
function startTracking() {
  document.getElementById("trackingStatusText").innerText = "Running";
  document.getElementById("trackingStatus").style.backgroundColor = "green";
  logMessage("Started tracking mode.", "success");
}
function stopTracking() {
  document.getElementById("trackingStatusText").innerText = "Stopped";
  document.getElementById("trackingStatus").style.backgroundColor = "gray";
  logMessage("Stopped tracking mode.", "error");
}
function updateSensitivity(val) {
  document.getElementById("sensitivityValue").innerText = val;
}

function toggleAutoTracking() {
  const state = document.getElementById("autoTracking").checked;
  logMessage(`Auto Tracking ${state ? "enabled" : "disabled"}.`, "success");
}
// === Sprayer ===
let waterLevel = 100; // Initial water level (percentage)
const SPRAY_CONSUMPTION_PER_USE = 10; // Percentage of water consumed per spray
function updateWaterLevelDisplay() {
  const waterLevelText = document.getElementById("waterLevelText");
  const lowWaterWarning = document.getElementById("lowWaterWarning");
  if (waterLevel > 50) {
    waterLevelText.innerText = "Penuh";
    lowWaterWarning.style.display = "none";
  } else if (waterLevel > 0) {
    waterLevelText.innerText = "Sedang";
    lowWaterWarning.style.display = "none";
  } else {
    waterLevelText.innerText = "Habis";
    lowWaterWarning.style.display = "inline"; // Show warning
    logMessage("PERINGATAN: Air semprotan habis! Harap isi ulang.", "error");
  }
}