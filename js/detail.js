document.addEventListener("DOMContentLoaded", function () {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (product) {
        // Actualizar los elementos del DOM con los datos del producto
        document.getElementById("product-title").textContent = product.name;
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-image").src = product.image;
        document.getElementById("cart-price").textContent = product.price;
        if (product.originalPrice) {
            document.getElementById("original-price").textContent = product.originalPrice;
        }

        // Mostrar el contenedor de descripción correspondiente
        const descriptionContainers = document.querySelectorAll(".product-description-container");
        descriptionContainers.forEach(container => container.style.display = "none"); // Ocultar todos los contenedores
        const activeDescription = document.getElementById(`product-description-${product.id}`);
        if (activeDescription) {
            activeDescription.style.display = "block"; // Mostrar solo el contenedor correspondiente
        }
    } else {
        // Si no hay datos del producto, redirigir al usuario a la página principal
        alert("No product selected!");
        window.location.href = "../index.html";
    }

    // Manejar selección de tamaño
    const sizeButtons = document.querySelectorAll(".size");
    sizeButtons.forEach(button => {
        button.addEventListener("click", () => {
            sizeButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Manejar selección de color
    const colorButtons = document.querySelectorAll(".color");
    colorButtons.forEach(button => {
        button.addEventListener("click", () => {
            colorButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Manejar cantidad y actualizar precio
    const quantityElement = document.querySelector(".quantity");
    const cartPriceElement = document.getElementById("cart-price");
    let quantity = 1;
    let basePrice = parseFloat(product.price.replace("$", ""));

    document.querySelector(".decrease").addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            const updatedPrice = (basePrice * quantity).toFixed(2);
            cartPriceElement.textContent = `$${updatedPrice}`;
        }
    });

    document.querySelector(".increase").addEventListener("click", () => {
        quantity++;
        quantityElement.textContent = quantity;
        const updatedPrice = (basePrice * quantity).toFixed(2);
        cartPriceElement.textContent = `$${updatedPrice}`;
    });

    // Botón de agregar al carrito
    document.querySelector(".add-to-cart").addEventListener("click", () => {
        const selectedSize = document.querySelector(".size.active");
        const selectedColor = document.querySelector(".color.active");

        if (!selectedSize || !selectedColor) {
            alert("Please select a size and color before adding to cart.");
            return;
        }

        const cartItem = {
            name: product.name,
            image: product.image,
            price: cartPriceElement.textContent,
            size: selectedSize.textContent,
            color: selectedColor.style.backgroundColor,
            quantity: quantity
        };

        console.log("Producto agregado al carrito:", cartItem);
        alert("Product added to cart!");
    });
});
