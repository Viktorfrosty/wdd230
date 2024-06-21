const modeButton = document.querySelector("#mode-selector");
const body = document.querySelector("body");
const cards = document.querySelectorAll(".card");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌑")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		cards.forEach(card => {
			card.style.boxShadow = "none";
		});
		modeButton.textContent = "🌟";
	} else {
		body.style.background = "white";
		body.style.color = "#000";
		cards.forEach(card => {
			card.style.boxShadow = "5px 5px 25px var(--accent-color)";
		});
		modeButton.textContent = "🌑";
	}
});