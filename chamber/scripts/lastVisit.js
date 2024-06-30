const visitInfo = document.querySelector("#last-visit");

const msToDays = 84600000;

const theDateToday = new Date();

const lastVisit = localStorage.getItem("lastVisit");

localStorage.setItem("lastVisit", theDateToday);

if (!lastVisit) {

    visitInfo.textContent = "Welcome! Let us know if you have any questions.";

} else {

    const timeDifference = theDateToday - new Date(lastVisit);

    const daysDifference = Math.floor(timeDifference/msToDays);

    if (daysDifference === 0) {
        
        visitInfo.textContent = `Back so soon! Awesome!`;

    } else if(daysDifference === 1) {

        visitInfo.textContent = "You last visited 1 day ago.";

    }else {

        visitInfo.textContent = `You last visited ${daysDifference} days ago.`;

    }

}