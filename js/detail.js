document.addEventListener("DOMContentLoaded", function () {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (product) {
        product.name = "Light Dress Bless"; // Cambia el nombre del producto
        document.querySelector(".product-img").src = product.image;
        document.querySelector("h1").innerHTML = `
            ${product.name}
            <div class="quantity-selector">
                <button class="decrease">-</button>
                <span class="quantity">1</span>
                <button class="increase">+</button>
            </div>
        `;
        document.querySelector(".add-to-cart").innerHTML = `Add to Cart | ${product.price}`;
    }

    // Funcionalidad del botón de regresar
    document.querySelector(".back-btn").addEventListener("click", () => {
        window.history.back(); // Regresa a la página anterior
    });

    // Funcionalidad del botón de "like" (corazón)
    const favoriteButton = document.querySelector(".favorite");
    const productId = product ? product.id : null; // Identificador único del producto
    let likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];

    // Verifica si el producto ya está en la lista de "likes"
    if (productId && likedProducts.includes(productId)) {
        const icon = favoriteButton.querySelector("i");
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid"); // Cambia a ícono sólido si ya está en "likes"
    }

    favoriteButton.addEventListener("click", () => {
        const icon = favoriteButton.querySelector("i");
        if (likedProducts.includes(productId)) {
            // Elimina el producto de la lista de "likes"
            likedProducts = likedProducts.filter(id => id !== productId);
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular"); // Cambia a ícono regular
        } else {
            // Agrega el producto a la lista de "likes"
            likedProducts.push(productId);
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid"); // Cambia a ícono sólido
        }
        // Actualiza el estado en localStorage
        localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
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

    // Manejar selección de tamaño
    document.querySelectorAll(".size").forEach(size => {
        size.addEventListener("click", () => {
            document.querySelectorAll(".size").forEach(s => s.classList.remove("active"));
            size.classList.add("active");
        });
    });

    // Manejar selección de color
    document.querySelectorAll(".color").forEach(color => {
        color.addEventListener("click", () => {
            document.querySelectorAll(".color").forEach(c => c.classList.remove("active"));
            color.classList.add("active");
        });
    });

    // Manejar el botón de "Agregar al carrito"
    document.querySelector(".add-to-cart").addEventListener("click", () => {
        const selectedSize = document.querySelector(".size.active");
        const selectedColor = document.querySelector(".color.active");

        if (!selectedSize || !selectedColor) {
            alert("Please select a size and color before adding to the cart.");
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

        // Guardar en localStorage (simulación de carrito)
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Product added to cart!");
    });
});
