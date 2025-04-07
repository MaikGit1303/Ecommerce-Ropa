document.addEventListener("DOMContentLoaded", function () {
    const product = {
        name: "Modern Light Clothes",
        image: "../../storage/img/Product 1.png",
        price: "$162.99",
        originalPrice: "$190.99",
        description: "Its simple and elegant shape makes it perfect for those of you who like minimalist clothes."
    };

    // Actualizar los elementos del DOM con los datos del producto
    document.getElementById("product-title").textContent = product.name;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("cart-price").textContent = product.price;
    document.getElementById("original-price").textContent = product.originalPrice;

    // Actualizar la descripción específica del producto
    document.getElementById("product-description").textContent = product.description;

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
            price: product.price,
            size: selectedSize.textContent,
            color: selectedColor.style.backgroundColor,
            quantity: quantity
        };

        console.log("Producto agregado al carrito:", cartItem);
        alert("Product added to cart!");
    });
});
