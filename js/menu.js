document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list a");
    const navButtons = document.querySelectorAll(".bottom-nav button");
    const categoryButtons = document.querySelectorAll(".category");
    const products = document.querySelectorAll(".product");
    const favoriteButtons = document.querySelectorAll(".favorite");

    // Manejar el menú móvil
    if (mobileMenu && navList) {
        mobileMenu.addEventListener("click", () => {
            navList.classList.toggle("active");
            document.body.classList.toggle("no-scroll");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navList.classList.remove("active");
                document.body.classList.remove("no-scroll");
            });
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                navList.classList.remove("active");
                document.body.classList.remove("no-scroll");
            }
        });
    }

    // Manejar la navegación inferior
    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Funcionalidad de los botones de la barra de navegación inferior
    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Cambiar el estado activo
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Realizar acciones según el botón
            const action = button.querySelector("img").alt.toLowerCase();
            switch (action) {
                case "home":
                    alert("Navegando a la página principal");
                    break;
                case "cart":
                    alert("Abriendo el carrito de compras");
                    break;
                case "favourite":
                    alert("Mostrando tus favoritos");
                    break;
                case "account":
                    alert("Accediendo a tu cuenta");
                    break;
                default:
                    console.log("Acción no definida para este botón");
            }
        });
    });

    // Filtrar productos por categoría
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            categoryButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

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

    // Manejar el corazón de "like"
    favoriteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const icon = button.querySelector("i");
            if (icon.classList.contains("fa-regular")) {
                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");
            } else {
                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");
            }
        });
    });

    // Funcionalidad del buscador
    const searchBox = document.querySelector(".search-box input");

    searchBox.addEventListener("input", () => {
        const query = searchBox.value.toLowerCase();

        products.forEach(product => {
            const productName = product.querySelector("h3").textContent.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = "block"; // Muestra el producto si coincide
            } else {
                product.style.display = "none"; // Oculta el producto si no coincide
            }
        });
    });

    // Redirigir a la página de detalles al hacer clic en un producto
    products.forEach(product => {
        product.addEventListener("click", () => {
            const productName = product.querySelector("h3").textContent;
            const productImage = product.querySelector("img").src;
            const productPrice = product.querySelector(".product-price").textContent;

            // Guardar detalles del producto en localStorage
            localStorage.setItem("selectedProduct", JSON.stringify({
                name: productName,
                image: productImage,
                price: productPrice
            }));

            // Redirigir a la página de detalles
            window.location.href = "views/detail.html";
        });
    });

    // Selecciona el producto "Light Dress Bless"
    const product = document.querySelector('.product[data-id="light-dress-bless"]');

    product.addEventListener("click", () => {
        // Guarda los datos del producto en localStorage
        const productData = {
            id: "light-dress-bless",
            name: "Light Dress Bless",
            image: "storage/img/Product 2.png",
            price: "$162.99",
            category: "Dress modern",
            rating: "⭐ 5.0"
        };
        localStorage.setItem("selectedProduct", JSON.stringify(productData));

        // Redirige a la página de detalle
        window.location.href = "views/detail.html";
    });
});
