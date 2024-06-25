const hamButton = document.querySelector('#nav-menu');

const navigation = document.querySelector('ul');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});