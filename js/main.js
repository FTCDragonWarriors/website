document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navbar-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    // Toggle Mobile Menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Highlight active link based on current URL
    const currentPath = window.location.pathname;
    const page = currentPath.split("/").pop() || 'index.html'; // Default to index.html if empty

    navLinkItems.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Simple check: if the link href matches the page name
        if (linkHref === page || (page === '' && linkHref === 'index.html') || (linkHref.endsWith(page) && page !== '')) {
            link.classList.add('active');
        }
    });

    // Fade In Animation for elements on scroll (optional, but requested in styles)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
});
