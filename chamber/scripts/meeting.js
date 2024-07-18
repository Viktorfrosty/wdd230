const popup = document.getElementById('popup');

// const today = new Date().getDay();

const today = 1;

document.addEventListener('DOMContentLoaded', function() {

    console.log(`today is weekday Nº ${today}`);

    if (today === 1 || today === 2 || today === 3) {

        popup.style.display = 'flex';
    }

});

function closePopup() {
    
    popup.style.display = 'none';

}