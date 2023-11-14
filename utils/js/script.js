const header = document.getElementById('header')
function fillHeader(homeLink, productsLink, aboutUsLink, contactLink, cartsLink) {
    header.innerHTML+=`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="${homeLink}">
                <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24"
                    class="d-inline-block align-text-top">
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="${productsLink}">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${aboutUsLink}">Sobre nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${cartsLink}">Carrito</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${contactLink}">Contactanos</a>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`
}
const footer = document.getElementById('footer')
footer.innerHTML+=