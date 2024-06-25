const modeButton = document.querySelector("#mode-selector");

const body = document.querySelector("body");

const cards = document.querySelectorAll(".card");

const iframe = document.querySelector("iframe");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("⚫")) {
		body.style.background = "var(--accent-color)";
		body.style.color = "var(--font-altern-color)";
		iframe.style.border = "5px solid var(--secondary-color)";
		iframe.style.boxShadow = "none;"
		cards.forEach(card => {
			card.style.border = "5px solid var(--secondary-color)";
			card.style.boxShadow = "none";
			card.querySelectorAll("a").forEach(link => {
				link.style.color = "var(--secondary-color)";
			});
			card.querySelectorAll("h2").forEach(h2 => {
				h2.style.borderBottom = "5px solid var(--secondary-color)"
			});
		});
		modeButton.textContent = "⚪";
	} else {
		body.style.background = "white";
		body.style.color = "var(--font-main-color)";
		iframe.style.border = "5px solid var(--accent-color)";
		iframe.style.boxShadow = "5px 5px 25px var(--accent-color)";
		cards.forEach(card => {
			card.style.border = "5px solid var(--accent-color)";
			card.style.boxShadow = "5px 5px 25px var(--accent-color)";
			card.querySelectorAll("a").forEach(link => {
				link.style.color = "var(--main-color)";
			});
			card.querySelectorAll("h2").forEach(h2 => {
				h2.style.borderBottom = "5px solid var(--accent-color)"
			});
		});
		modeButton.textContent = "⚫";
	}
});