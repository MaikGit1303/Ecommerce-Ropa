// FILTRO POR CATEGORÍA
const categoryButtons = document.querySelectorAll('.category');
const products = document.querySelectorAll('.product');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            if (category === 'all' || productCategory === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// BOTÓN DE CORAZÓN / LIKE
document.querySelectorAll('.favorite').forEach(button => {
    button.addEventListener('click', () => {
        const img = button.querySelector('img');
        const currentSrc = img.getAttribute('src');

        // Verifica que las rutas sean correctas y que las imágenes existan
        if (currentSrc.includes('heart.png')) {
            img.setAttribute('src', 'storage/img/heart(1).png'); // Imagen de corazón relleno
        } else if (currentSrc.includes('heart(1).png')) {
            img.setAttribute('src', 'storage/img/heart.png'); // Imagen de corazón vacío
        } else {
            console.error('La ruta de la imagen no es válida:', currentSrc);
        }
    });
});

// BARRA DE BÚSQUEDA 
const searchBar = document.getElementById('search-bar');
if (searchBar) {
    searchBar.addEventListener('input', () => {
        const searchValue = searchBar.value.toLowerCase();
        products.forEach(product => {
            const name = product.querySelector('h3').textContent.toLowerCase();
            product.style.display = name.includes(searchValue) ? 'block' : 'none';
        });
    });
}
