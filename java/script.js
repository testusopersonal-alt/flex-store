let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    updateCart();
}

// Nueva función para eliminar una prenda específica
function removeItem(index) {
    cart.splice(index, 1); // Borra el elemento en esa posición
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartCount.innerText = cart.length;
    cartItems.innerHTML = '';
    total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                <div class="item-info">
                    <span>${item.name}</span>
                    <br>
                    <small>Q${item.price}.00</small>
                </div>
                <button onclick="removeItem(${index})" style="background:none; border:none; color:red; cursor:pointer; font-size: 0.7rem;">
                    ELIMINAR [X]
                </button>
            </div>
        `;
    });

    cartTotal.innerText = `Q${total}.00`;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}