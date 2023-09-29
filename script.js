// script.js
document.addEventListener('DOMContentLoaded', function () {
    const productShowcase = document.getElementById('product-showcase');
    const addItemButton = document.getElementById('add-item-button');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Example product data (you can replace this with your actual product data)
    const products = [
        { name: 'Hookah Part 1', price: 20.00 },
        { name: 'Hookah Part 2', price: 15.00 },
        { name: 'Hookah Part 3', price: 25.00 }
    ];

    // Initialize cart and total
    const cart = [];
    let total = 0;

    // Function to update the cart and total
    function updateCart() {
        cartItems.innerHTML = '';
        total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    // Populate the product showcase
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;

        const addToCartButton = card.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
            cart.push(product);
            updateCart();
        });

        productShowcase.appendChild(card);
    });

    // Add Item button functionality (for demonstration)
    addItemButton.addEventListener('click', () => {
        const itemName = prompt('Enter the name of the new hookah part:');
        const itemPrice = parseFloat(prompt('Enter the price of the new hookah part:'));
        if (!isNaN(itemPrice)) {
            const newItem = { name: itemName, price: itemPrice };
            products.push(newItem);

            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${newItem.name}</h3>
                <p>$${newItem.price.toFixed(2)}</p>
                <button class="add-to-cart">Add to Cart</button>
            `;

            const addToCartButton = card.querySelector('.add-to-cart');
            addToCartButton.addEventListener('click', () => {
                cart.push(newItem);
                updateCart();
            });

            productShowcase.appendChild(card);
        }
    });
});
