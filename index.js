// JavaScript for Interactive Elements

// Navbar toggle for mobile view
document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.querySelector(".navbar .container");
    navbarToggle.addEventListener("click", function() {
        this.classList.toggle("active");
    });
});
