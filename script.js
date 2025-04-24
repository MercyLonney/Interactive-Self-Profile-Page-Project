function showGreeting() {
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) {
greeting.textContent = "Good morning!";
} else if (hour < 18) {
greeting.textContent = "Good afternoon!";
} else {
greeting.textContent = "Good evening!";
}
}

function toggleBio() {
const moreText = document.getElementById("moreBio");
if (moreText.style.display === "none") {
moreText.style.display = "block";
} else {
moreText.style.display = "none";
}
}
