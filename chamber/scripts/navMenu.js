const menuButton = document.querySelector('#nav-menu');
const navigation = document.querySelector('ul');

menuButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	menuButton.classList.toggle('show');
});