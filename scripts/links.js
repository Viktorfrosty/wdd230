const baseURL = "https://viktorfrosty.github.io/wdd230/";

const linksURL = "https://viktorfrosty.github.io/wdd230/data/links.json";

const list = document.querySelector("#dinamic-list");

async function getLinks() {

    const response = await fetch(linksURL);

    const data = await response.json();

    console.log(data);

    displayLinks(data.weeks);

};

function displayLinks(weeks) {

    weeks.forEach(week => {

        let listElement = document.createElement("li");

        listElement.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {

            let activity = document.createElement("a");

            activity.setAttribute("href", link.url);

            activity.textContent = link.title;

            listElement.appendChild(activity);

            if (index !== week.links.length - 1) {

                let spacer = document.createElement("span");

                spacer.textContent = " | ";

                listElement.appendChild(spacer);

            }

        });

        list.appendChild(listElement);

    });

};

getLinks();