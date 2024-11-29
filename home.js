const menuToggle = document.querySelector('.menu-toggle');
const closeToggle = document.querySelector('.close-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.add('active');  // Show the navbar
    menuToggle.style.display = 'none'; // Hide the hamburger menu icon
    closeToggle.style.display = 'block'; // Show the close button
});

closeToggle.addEventListener('click', () => {
    navbar.classList.remove('active');  // Hide the navbar
    menuToggle.style.display = 'block'; // Show the hamburger menu icon again
    closeToggle.style.display = 'none'; // Hide the close button
});