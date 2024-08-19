let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Toggle the 'active' class on the navbar when the menu icon is clicked
menu.addEventListener("click", function() {
    navbar.classList.toggle("active");
});

// Close the navbar when clicking outside of it
document.addEventListener("click", function(event) {
    if (!navbar.contains(event.target) && !menu.contains(event.target)) {
        navbar.classList.remove("active");
    }
});

// Optional: Remove 'active' class on scroll only if the navbar is open
window.addEventListener("scroll", function() {
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
    }
});
