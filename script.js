document.addEventListener("DOMContentLoaded", function() {
    function addToCart(event) {
        const selectedItem = event.currentTarget.closest('.gallery-item');
        const itemImage = selectedItem.querySelector('img').src;
        const itemName = selectedItem.querySelector('.price').previousElementSibling.textContent;
        const itemPrice = selectedItem.querySelector('.price').textContent;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${itemImage}" alt="Product Image">
            <div class="item-details">
                <div class="item-name">${itemName}</div>
                <div class="item-price">${itemPrice}</div>
                <div class="item-quantity">Quantity: 1</div>
            </div>
        `;

        const cartContainer = document.querySelector('.cart-container');
        cartContainer.appendChild(cartItem);
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
