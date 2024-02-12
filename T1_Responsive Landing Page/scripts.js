// JavaScript to change the header background color on scroll
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.style.backgroundColor = window.scrollY > 0 ? '#555' : '#333';
});

// JavaScript to change the color of menu items on hover
var menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('mouseover', function () {
        this.style.color = '#ff9900'; // Change color on hover
    });

    menuItem.addEventListener('mouseout', function () {
        this.style.color = 'white'; // Reset color when not hovering
    });
});
