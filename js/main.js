document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category");
    const products = document.querySelectorAll(".product");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Quitar clase activa de todos los botones
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            // Activar el botón seleccionado
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            // Mostrar u ocultar productos según la categoría seleccionada
            products.forEach(product => {
                const category = product.getAttribute("data-category");
                if (filter === "all" || filter === category) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});

// Botón de like (corazón)
document.querySelectorAll('.favorite').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');

        if (icon.classList.contains('fa-regular')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    });
});
