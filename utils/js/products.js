document.addEventListener('DOMContentLoaded', function () {
    let storedProducts = localStorage.getItem('filteredProducts');
    if (storedProducts) {
        let products = JSON.parse(storedProducts);
        // Trabajar con la lista de productos
        console.log(products);
    }
});