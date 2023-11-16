const header = document.getElementById('header')
const footer = document.getElementById('footer')
function fillHeader(paginationLinkPrefix, utilLinkPrefix) {
    header.innerHTML += `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="${utilLinkPrefix}index.html">
                    <img src="${utilLinkPrefix}public/imagenes/logo.png" alt="Logo" width="30" height="24"
                        class="d-inline-block align-text-top">
                    GeekGrove
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 list-unstyled">
                        <li class="nav-item dropdown">
                            <a class="nav-link" role="button" aria-expanded="false">
                                Productos
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item"  href="${paginationLinkPrefix}products.html" onclick="handleMenuClick('componentes_hardware')">Componentes de Hardware</a></li>
                                <li><a class="dropdown-item" href="${paginationLinkPrefix}products.html" onclick="handleMenuClick('productos_tecnologicos')">Productos Tecnológicos</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="${paginationLinkPrefix}aboutUs.html">Sobre Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="${paginationLinkPrefix}contact.html">Contáctanos </a>
                        </li>
                    </ul>
                    <ul class="d-flex list-unstyled">
                        <li class="nav-item">
                            <a class="nav-link navbar-brand" href="${paginationLinkPrefix}cart.html">
                                <img src="${utilLinkPrefix}public/imagenes/Carrito.png" alt="Logo" width="30" height="24"
                                    class="d-inline-block align-text-top">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `

    footer.innerHTML += `<nav class="navbar navbar-expand-lg nav-footer">
    <ul class="navbar-nav list-unstyled">
        <li class="nav-item">
            <a class="nav-link navbar-brand" href="https://www.whatsapp.com/">
                <img src="${utilLinkPrefix}public/imagenes/whatapp.png" alt="Logo"
                    class="footer-img">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link navbar-brand" href="https://www.instagram.com">
                <img src="${utilLinkPrefix}public/imagenes/logo-insta.png" alt="Logo"
                    class="footer-img">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link navbar-brand" href="https://www.facebook.com">
                <img src="${utilLinkPrefix}public/imagenes/logo-face.png" alt="Logo"
                    class="footer-img">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link navbar-brand footer-link" href="https://discord.com">
                <img src="${utilLinkPrefix}public/imagenes/discord.jpeg" alt="Logo"
                    class="footer-img">
            </a>
        </li>
        </ul>
</nav>
<div class="rights">
<p>&copy Todos los derechos reservados al Grupo de Trabajo de Limay</p>
<p>Integrantes: Juan Bautista Tosi Griedassov, Simon Raul Pero Bellido, Thiago Munguia, Juan Cruz Hardcastle, Valentino Pascuali</p></div>
`
}
function handleMenuClick(category) {
    // Fetch y procesamiento de productos
    fetch('./../products.json')
        .then(response => response.json())
        .then(data => {
            // Validar que la categoría seleccionada esté presente en el JSON
            if (data[category]) {
                var filteredProducts = data[category];
                // Almacenar los productos filtrados en localStorage
                localStorage.setItem('filteredProducts', JSON.stringify(filteredProducts));
            } else {
                console.error('Categoría no válida o no encontrada en el JSON');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function addToCart(id) {
    fetch('./products.json')
        .then(response => response.json())
        .then(data => {
            let allProducts = data.productos_tecnologicos.concat(data.componentes_hardware)
            let selectedProduct = allProducts.find(product => product.id === id);
            // Obtén el carrito actual desde localStorage
            let currentCart = JSON.parse(localStorage.getItem('cart')) || []
            // Verifica si el producto ya está en el carrito
            let existingProduct = currentCart.find(product => product.id === selectedProduct.id)
            // Compara si la cantidad en el carrito es igual o menor al stock del producto
            if (existingProduct && existingProduct.quantity >= selectedProduct.stock) {
                return;  // Detiene la ejecución si la cantidad alcanza o supera el stock máximo
            }
            if (existingProduct) {
                existingProduct.quantity = (existingProduct.quantity || 1) + 1
            } else {
                // Si el producto no está en el carrito, agrégalo
                // Crea un nuevo objeto sin el atributo 'stock'
                let productToAdd = { ...selectedProduct }
                delete productToAdd.stock
                productToAdd.quantity = 1
                currentCart.push(productToAdd)
            }
            localStorage.setItem('cart', JSON.stringify(currentCart))
        })
        .catch(error => console.error('Error fetching data:', error))
}