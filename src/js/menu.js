// Control del menú desplegable
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');

menuToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
