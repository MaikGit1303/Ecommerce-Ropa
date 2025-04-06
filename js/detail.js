document.addEventListener("DOMContentLoaded", function () {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (product) {
        // Actualizar los elementos del DOM con los datos del producto
        document.getElementById("product-title").textContent = product.name;
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-rating").textContent = product.rating;
        document.getElementById("product-description").textContent = product.description;
    } else {
        // Si no hay datos del producto, redirigir al usuario a la página principal
        alert("No product selected!");
        window.location.href = "../index.html";
    }

    // Funcionalidad del botón de regresar
    document.querySelector(".back-btn").addEventListener("click", () => {
        window.history.back();
    });

    // Manejar cantidad
    const quantityElement = document.querySelector(".quantity");
    let quantity = 1;

    document.querySelector(".decrease").addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    });

    document.querySelector(".increase").addEventListener("click", () => {
        quantity++;
        quantityElement.textContent = quantity;
    });
});
