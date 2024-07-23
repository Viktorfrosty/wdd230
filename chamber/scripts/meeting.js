const popup = document.getElementById("popup");

const invitation = document.getElementById("invitation");

const today = new Date().getDay();

document.addEventListener('DOMContentLoaded', function() {

    if (today === 1 || today === 2) {

        popup.style.display = 'flex';

        invitation.textContent = "The Twilight's Chamber of Commerce helds a meet and greet gathering on Wednesday at 7:00 p.m.";

    } else if (today === 3) {

        popup.style.display = 'flex';

        invitation.textContent = "The Twilight's Chamber of Commerce helds a meet and greet gathering today at 7:00 p.m.";

    };

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
        closePopup();
        }
    });

});

function closePopup() {
    
    popup.style.display = 'none';

}