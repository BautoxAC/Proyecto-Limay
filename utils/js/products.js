document.addEventListener('DOMContentLoaded', function () {
    let storedProducts = localStorage.getItem('filteredProducts')
    if (storedProducts) {
        let products = JSON.parse(storedProducts)
        // Obtener el elemento ul
        let productList = document.getElementById('productList')
        // Recorrer la lista de productos y crear elementos li para cada uno
        products.forEach(product => {
            let productTemplate = `
                <li class="product-card offer-product-3">
                    <img class="product-image" src="${product.imgUrl}"alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>Precio: $${product.price.toFixed(2)}</p>
                    <button type="button" class="btn btn-outline-secondary" onclick="addToCart('${product.id}')">Añadir al carrito</button>
                </li>
            `
            // Agregar el elemento li al elemento ul
            productList.innerHTML += productTemplate
        });
    }
});

function addToCart(id) {
    fetch('../../products.json')
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
