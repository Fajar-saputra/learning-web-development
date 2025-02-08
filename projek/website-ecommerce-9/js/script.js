const menuTrigger = document.querySelector('#menu-trigger');
const divMenuTrigger = document.querySelectorAll('#menu-trigger div');
const navbar = document.querySelector('.navbar');



menuTrigger.addEventListener('click', () => {
    navbar.classList.toggle('menuTrigger');

})