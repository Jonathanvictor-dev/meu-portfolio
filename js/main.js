const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuBtn.querySelector('i');
const fadeElems = document.querySelectorAll('.fade-in');
const contactForm = document.getElementById('contact-form');
const formToast = document.getElementById('form-toast');

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

function validateFields() {
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name) {
        contactForm.name.focus();
        return createError('Por favor, preencha seu nome.');
    };

    if (!email.includes('@') || !email.includes('.')) {
        contactForm.email.focus();
        return createError('Por favor, preencha seu e-mail corretamente. Ex: seu@email.com');
    }

    if (!message) {
        contactForm.message.focus();
        return createError('Por favor, preencha sua mensagem.');
    }

    return null;
}

function showMessage() {
    formToast.classList.remove('hidden');

    setTimeout(() => {
        formToast.classList.add('hidden');
    }, 5000);
}

function createError(message) {
    return {
        message,
        icon: 'fa-solid fa-triangle-exclamation',
    };
}

function messageError(message, icon) {
    const iconElem = formToast.querySelector('i');

    iconElem.className = icon;
    formToast.querySelector('span').innerHTML = message;
}

function messageSuccess(message) {
    const iconElem = formToast.querySelector('i');

    iconElem.className = 'fa-solid fa-circle-check';
    formToast.querySelector('span').innerHTML = message;
}

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

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const error = validateFields();

    if (error) {
        const { message, icon } = error;

        messageError(message, icon);
        showMessage();
        return;
    }

    messageSuccess('Mensagem enviada com sucesso! Em breve entrarei em contato.');
    showMessage();
    contactForm.reset();
});


