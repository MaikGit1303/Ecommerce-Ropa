document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list a");

    if (mobileMenu && navList) {
        mobileMenu.addEventListener("click", () => {
            navList.classList.toggle("active");
            document.body.classList.toggle("no-scroll"); // Evita el scroll cuando el menú está abierto
        });

        // Cerrar menú cuando se hace clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navList.classList.remove("active");
                document.body.classList.remove("no-scroll");
            });
        });

        // Ocultar menú en pantallas grandes si se cambia el tamaño
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) { // Ajusta este valor según tu diseño
                navList.classList.remove("active");
                document.body.classList.remove("no-scroll");
            }
        });
    }
});
