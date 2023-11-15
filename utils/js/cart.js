document.addEventListener('DOMContentLoaded', function () {
    let cartProducts = localStorage.getItem('cart')
    if (cartProducts) {
        let products = JSON.parse(cartProducts)
        // Obtener el elemento ul
        let productList = document.getElementById('productList')
        // Recorrer la lista de productos y crear elementos li para cada uno
        products.forEach(product => {
            let productTemplate = `
            <li class="product-card offer-product-3">
                <img class="product-image" src="${product.imgUrl}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Precio: $${product.price}</p>
                <div> 
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-secondary" onclick="updateQuantity('${product.id}', -1)">-</button>
                        <button type="button" class="btn btn-secondary">${product.quantity}</button>
                        <button type="button" class="btn btn-secondary" onclick="updateQuantity('${product.id}', 1)">+</button>
                    </div>
                    <button type="button" class="btn btn-secondary deleteProductFromCart" onclick="deleteFromCart('${product.id}')">X</button>
                </div>
            </li>
            `
            // Agregar el elemento li al elemento ul
            productList.innerHTML += productTemplate
        });
    }
});

document.getElementById('clearCartButton').addEventListener('click', function () {
    clearCart(true);
    renderCartProducts()
});

function deleteFromCart(id) {
    let cartProducts = localStorage.getItem('cart');
    if (cartProducts) {
        let products = JSON.parse(cartProducts);
        let productIndex = products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            products.splice(productIndex, 1);
            localStorage.setItem('cart', JSON.stringify(products));
            renderCartProducts();
        } else {
        }
    }
}

function updateQuantity(id, change) {
    fetch('../../products.json')
        .then(response => response.json())
        .then(data => {
            let allProducts = data.productos_tecnologicos.concat(data.componentes_hardware);
            let selectedProduct = allProducts.find(product => product.id === id);

            let cartProducts = localStorage.getItem('cart');
            if (cartProducts) {
                let products = JSON.parse(cartProducts);
                let productIndex = products.findIndex(product => product.id === id);

                if (productIndex !== -1) {
                    // Verificar si hay suficiente stock antes de actualizar la cantidad
                    if (change === -1 && products[productIndex].quantity > 1) {
                        // Restar 1 a la cantidad
                        products[productIndex].quantity += change;
                    } else if (change === 1 && products[productIndex].quantity < selectedProduct.stock) {
                        // Sumar 1 a la cantidad si no excede el stock
                        products[productIndex].quantity += change;
                    }

                    localStorage.setItem('cart', JSON.stringify(products));
                    renderCartProducts();
                }
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function renderCartProducts() {
    let cartProducts = localStorage.getItem('cart');
    if (cartProducts) {
        let products = JSON.parse(cartProducts);
        let productList = document.getElementById('productList');
        productList.innerHTML = '';
        products.forEach(product => {
            let productTemplate = `
                <li class="product-card offer-product-3">
                    <img class="product-image" src="${product.imgUrl}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>Precio: $${product.price}</p>
                    <div> 
                    <div class="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" class="btn btn-secondary" onclick="updateQuantity('${product.id}', -1)">-</button>
                    <button type="button" class="btn btn-secondary">${product.quantity}</button>
                    <button type="button" class="btn btn-secondary" onclick="updateQuantity('${product.id}', 1)">+</button>
                </div>
                        <button type="button" class="btn btn-secondary deleteProductFromCart" onclick="deleteFromCart('${product.id}')">X</button>
                    </div>
                </li>
            `;
            productList.innerHTML += productTemplate;
        });

        // Agrega el evento a los botones de eliminar
        let deleteButtons = document.getElementsByClassName('deleteProductFromCart');
        Array.from(deleteButtons).forEach(button => {
            button.addEventListener('click', function () {
                let productId = this.getAttribute('data-product-id');
                deleteFromCart(productId);
            });
        });
    } else{
        productList.innerHTML= "";
    }
}

function clearCart(renderAfterClear) {
    localStorage.removeItem('cart');
}