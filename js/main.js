// Filtrado por categoría
const categoryButtons = document.querySelectorAll('.category');
const products = document.querySelectorAll('.product');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Quitar clase activa a todos
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Activar botón actual
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            if (category === 'all' || category === productCategory) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
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
