// =========================
// Shopping Cart
// =========================

let cart = [];


// =========================
// Add Product to Cart
// =========================

function addToCart(productName, price) {

    const existingProduct = cart.find(
        item => item.name === productName
    );

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }

    updateCart();

    alert(productName + " added to cart!");
}


// =========================
// Update Shopping Cart
// =========================

function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.textContent = "0";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <br>
                ₹${item.price.toLocaleString("en-IN")}
                × ${item.quantity}
            </div>

            <div>
                <strong>
                    ₹${itemTotal.toLocaleString("en-IN")}
                </strong>

                <button
                    onclick="removeFromCart(${index})"
                    style="margin-left: 10px; background: #dc2626;"
                >
                    Remove
                </button>
            </div>
        `;

        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toLocaleString("en-IN");
}


// =========================
// Remove Product
// =========================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// =========================
// Search Products
// =========================

function searchProducts() {

    const searchText =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    const products =
        document.querySelectorAll(".product");

    products.forEach(product => {

        const productName =
            product.querySelector("h3")
            .textContent
            .toLowerCase();

        const productDescription =
            product.querySelector("p")
            .textContent
            .toLowerCase();

        if (
            productName.includes(searchText) ||
            productDescription.includes(searchText)
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}


// =========================
// Shop Now Button
// =========================

function scrollToProducts() {

    const productsSection =
        document.getElementById("products");

    productsSection.scrollIntoView({
        behavior: "smooth"
    });
}


// =========================
// Checkout
// =========================

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    alert(
        "Thank you for shopping with ShopEasy!\n\n" +
        "Your order total is ₹" +
        total.toLocaleString("en-IN") +
        "."
    );

    cart = [];

    updateCart();
}


// =========================
// Initial Cart Display
// =========================

updateCart();