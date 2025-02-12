document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem("cartCount")) {
        document.getElementById("cart-count").innerText = sessionStorage.getItem("cartCount");
    }
});

function addToCart(item, price) {
    let cartCount = document.getElementById("cart-count");
    let count = parseInt(cartCount.innerText) + 1;
    cartCount.innerText = count;
    sessionStorage.setItem("cartCount", count);
    alert(item + " added to cart!");
}

function checkout() {
    alert("Redirecting to secure payment...");
    window.location.href = "https://checkout.stripe.com";
}
