// script.js

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
});

// Smooth Scrolling
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

for (let link of smoothScrollLinks) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
}

// Form Validation
const form = document.querySelector('form');
const emailInput = form.querySelector('input[type="email"]');

form.addEventListener('submit', (e) => {
    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}