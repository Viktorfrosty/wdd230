const baseURL = "https://viktorfrosty.github.io/wdd230/chamber/";

const linksURL = "https://viktorfrosty.github.io/wdd230/chamber/data/members.json";

let spotlight = document.querySelector("#spotlight-card");

let counter = 1;

async function getMembers() {
    
    let urlData = await fetch(linksURL);

    let spotlightData = await urlData.json();

    populateSpotlight(spotlightData.members);

};

function populateSpotlight(members) {

    members.forEach(member => {

        if (member.membership == "gold" || member.membership == "silver") {

        };

    });

};

getMembers();