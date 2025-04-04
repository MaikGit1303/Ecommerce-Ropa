// menú responsivo
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // Evita el scroll al abrir el menú
});
