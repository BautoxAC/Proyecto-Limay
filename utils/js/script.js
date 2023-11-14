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
                            <a class="nav-link dropdown-toggle" href="${paginationLinkPrefix}products.html" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Componentes de Hardware
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Procesadores (CPU)</a></li>
                                <li><a class="dropdown-item" href="#">Tarjetas madre (motherboards)</a></li>
                                <li><a class="dropdown-item" href="#">Tarjetas gráficas</a></li>
                                <li><a class="dropdown-item" href="#">Memoria RAM</a></li>
                                <li><a class="dropdown-item" href="#">Discos duros (HDD y SSD)</a></li>
                                <li><a class="dropdown-item" href="#">Unidades de estado sólido (SSD)</a></li>
                                <li><a class="dropdown-item" href="#">Fuentes de alimentación</a></li>
                                <li><a class="dropdown-item" href="#">Ventiladores y disipadores</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Productos Tecnológicos
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Dispositivos Periféricos</a></li>
                                <li><a class="dropdown-item" href="#">Accesorios para Computadoras</a></li>
                                <li><a class="dropdown-item" href="#">Productos de Almacenamiento</a></li>
                                <li><a class="dropdown-item" href="#">Productos de Limpieza y Mantenimiento</a></li>
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
    
footer.innerHTML += `<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="collapse navbar-collapse container-fluid" id="navbarNav">
    <ul class="navbar-nav list-unstyled">
        <li class="nav-item">
            <a class="nav-link navbar-brand" href="#">
                <img src="${utilLinkPrefix}public/imagenes/whatapp.png" alt="Logo" width="200" height="200"
                    class="d-inline-block align-text-top">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link navbar-brand" href="#">
                <img src="${utilLinkPrefix}public/imagenes/logo-insta.png" alt="Logo" width="30" height="24"
                    class="d-inline-block align-text-top">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link navbar-brand" href="#">
                <img src="${utilLinkPrefix}public/imagenes/logo-face.png" alt="Logo" width="30" height="24"
                    class="d-inline-block align-text-top">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link navbar-brand" href="#">
                <img src="${utilLinkPrefix}public/imagenes/discord.jpeg" alt="Logo" width="30" height="24"
                    class="d-inline-block align-text-top">
            </a>
        </li>
    </ul>
</div>
</nav>`
}
