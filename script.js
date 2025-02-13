document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});

function addToCart(item, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ item, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}

function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Redirecting to secure payment...");
    window.location.href = "https://checkout.stripe.com";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function postToCommunity() {
    let userPost = document.getElementById("user-post").value;
    if (!userPost.trim()) {
        alert("Please enter a post before submitting.");
        return;
    }
    let postsContainer = document.getElementById("community-posts");
    let newPost = document.createElement("li");
    newPost.textContent = userPost;
    postsContainer.appendChild(newPost);
    document.getElementById("user-post").value = "";
}
