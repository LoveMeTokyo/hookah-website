document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("product-form");
    const productList = document.getElementById("product-list");

    productForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const productName = document.getElementById("product-name").value;
        const productDescription = document.getElementById("product-description").value;
        const productPrice = parseFloat(document.getElementById("product-price").value);
        const productImage = document.getElementById("product-image").value;

        // Create a product object
        const product = {
            name: productName,
            description: productDescription,
            price: productPrice,
            image: productImage,
        };

        // Add the product to the product list
        displayProduct(product);

        // Clear the form fields
        productForm.reset();
    });

    // Function to display a product
    function displayProduct(product) {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
        `;

        productList.appendChild(productItem);
    }
});
