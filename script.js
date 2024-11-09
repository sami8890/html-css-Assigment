// Toggle menu functionality
const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    navContainer.classList.toggle('active');
});

// Close menu when clicking an outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('header')) {
        hamburger.classList.remove('active');
        navContainer.classList.remove('active');
    }
});

// Close menu when resizing above breakpoint
window.addEventListener('resize', function () {
    if (window.innerWidth > 950) {
        hamburger.classList.remove('active');
        navContainer.classList.remove('active');
    }
});