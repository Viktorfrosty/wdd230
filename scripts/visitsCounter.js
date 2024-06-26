const counter = document.querySelector("#counter");

let visits = localStorage.getItem("numVisits") || 0;

counter.textContent = `Page visit count: ${visits}`;

visits++;

localStorage.setItem("numVisits", visits);

if (visits !== 0) {
    counter.textContent = `Page visit count: ${visits}`;
}