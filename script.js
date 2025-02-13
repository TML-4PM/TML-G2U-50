// JavaScript for WildLifeShield

document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});

// Function to add items to cart
function addToCart(item, price) {
    try {
        let cartCount = document.getElementById("cart-count");
        let count = parseInt(cartCount.innerText) + 1;
        cartCount.innerText = count;

        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        cart.push({ item, price });
        sessionStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
        console.error("Session storage is unavailable.", e);
        alert("Your cart may not persist after page reload.");
    }
}

// Function to update cart count on page load
function updateCartCount() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}

// Function to show order confirmation
function showOrderConfirmation() {
    document.getElementById("checkout").style.display = "none";
    document.getElementById("order-confirmation").style.display = "block";
}

// Function to redirect to payment gateway
function redirectToPayment() {
    const paymentURL = "https://checkout.stripe.com";
    alert("Redirecting to secure payment...");
    window.location.href = paymentURL;
}
