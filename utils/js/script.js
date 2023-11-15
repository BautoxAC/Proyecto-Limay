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
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="${paginationLinkPrefix}products.html" onclick="handleMenuClick('componentes_hardware')">Componentes de Hardware</a></li>
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
<div class="collapse navbar-collapse container-fluid" id="navbarNav">
    <ul class="navbar-nav list-unstyled">
        <li class="nav-item">
            <a class="nav-link navbar-brand" href="https://www.whatsapp.com/">
                <img src="${utilLinkPrefix}public/imagenes/whatapp.png" alt="Logo" width="40" height="32"
                    class="d-inline-block align-text-top">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link navbar-brand" href="https://www.instagram.com">
                <img src="${utilLinkPrefix}public/imagenes/logo-insta.png" alt="Logo" width="40" height="32"
                    class="d-inline-block align-text-top">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link navbar-brand" href="https://www.facebook.com">
                <img src="${utilLinkPrefix}public/imagenes/logo-face.png" alt="Logo" width="40" height="32"
                    class="d-inline-block align-text-top">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link navbar-brand" href="https://discord.com">
                <img src="${utilLinkPrefix}public/imagenes/discord.jpeg" alt="Logo" width="40" height="32"
                    class="d-inline-block align-text-top">
            </a>
        </li>
    </ul>
</div>
</nav>
<div class="rights">
<p>&copy; Todos los derechos reservados al Grupo de Trabajo de Limay</p>
<p>Integrantes: Juan Bautista Tosi Griedassov, Simon Raul Pero Bellido, Thiago Munguia, Juan Cruz Hardcastle, Valentino Pascuali</p></div>
`
}

function handleMenuClick(category) {
    // Fetch y procesamiento de productos
    fetch('../../data.json')
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
