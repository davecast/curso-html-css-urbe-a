const $navIcon = document.getElementById('nav__icon');
const $navMenu = document.getElementById('nav__menu')

$navIcon.addEventListener('click', (e) => {
	$navMenu.classList.toggle('nav__menu--active')
})