const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const isOpen = !mobileMenu.classList.contains('hidden');
    menuBtn.setAttribute('aria-expanded', isOpen);

    if (isOpen) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark w-6 h-6"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars w-6 h-6"></i>';
    }
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = '<i class="fa-solid fa-bars w-6 h-6"></i>';
    });
});

const fadeElems = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElems.forEach(elem => {
    observer.observe(elem);
});

const contactForm = document.getElementById('contact-form');
const formToast = document.getElementById('form-toast');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    formToast.classList.remove('hidden');

    contactForm.reset();

    setTimeout(() => {
        formToast.classList.add('hidden');
    }, 5000);
});
