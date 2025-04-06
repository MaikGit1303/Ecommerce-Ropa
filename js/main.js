document.addEventListener("DOMContentLoaded", function () {
    // Botón de me gusta (corazón)
    const likeButtons = document.querySelectorAll(".favorite");

    likeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
        });
    });

    // Filtros de categorías
    const categoryButtons = document.querySelectorAll(".category");
    const products = document.querySelectorAll(".product");

    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Marcar la categoría activa
            categoryButtons.forEach(c => c.classList.remove("active"));
            btn.classList.add("active");

            const category = btn.getAttribute("data-category");

            products.forEach(product => {
                if (category === "all" || product.classList.contains(category)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });

    // Navegación inferior
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});
