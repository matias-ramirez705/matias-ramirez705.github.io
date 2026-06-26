/* ============================================
   PORTFOLIO - Script principal
   - Navbar scroll
   - Menú mobile
   - Animaciones reveal al scroll
   - Barras de habilidades animadas
   - Año dinámico en footer
   - Manejo del formulario
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    // ===== AÑO DINÁMICO EN FOOTER =====
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ===== THEME SWITCHER =====
    // Aplica el tema guardado (o respeta la preferencia guardada)
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    applyTheme(savedTheme);

    const themeBtn = document.getElementById('theme-btn');
    const themeDropdown = document.getElementById('theme-dropdown');
    const themeOptions = document.querySelectorAll('.theme-option');

    if (themeBtn) {
        themeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            themeDropdown.classList.toggle('open');
        });
    }

    // Cierra el dropdown al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.theme-switcher')) {
            themeDropdown.classList.remove('open');
        }
    });

    // Maneja la selección de tema
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.getAttribute('data-theme');
            applyTheme(theme);
            localStorage.setItem('portfolio-theme', theme);
            themeDropdown.classList.remove('open');
        });
    });

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        // Actualiza el botón activo en el dropdown
        themeOptions.forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-theme') === theme);
        });
    }

    // ===== NAVBAR SCROLL =====
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // ===== MENÚ MOBILE =====
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ===== ANIMACIONES REVEAL AL SCROLL =====
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Pequeño delay escalonado para efecto cascada
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== BARRAS DE HABILIDADES ANIMADAS =====
    const skillFills = document.querySelectorAll('.skill-fill');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetWidth = entry.target.getAttribute('data-width');
                entry.target.style.width = targetWidth;
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillFills.forEach(fill => skillObserver.observe(fill));

    // ===== SMOOTH SCROLL (mejora el scroll-behavior CSS para nav fija) =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 70;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== ACTIVE LINK EN NAV SEGÚN SECCIÓN VISIBLE =====
    const sections = document.querySelectorAll('section[id]');
    const navLinkEls = document.querySelectorAll('.nav-link');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinkEls.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, { threshold: 0.4, rootMargin: '-80px 0px -50% 0px' });

    sections.forEach(section => sectionObserver.observe(section));

    // ===== TYPING EFFECT EN HERO TITLE (sutil) =====
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 45);
            }
        };
        setTimeout(typeWriter, 500);
    }
});

// ===== FORMULARIO DE CONTACTO =====
// Nota: Como es un sitio estático en GitHub Pages, no hay backend.
// El formulario abre el cliente de email del usuario con los datos pre-cargados.
// Para más opciones (Formspree, EmailJS, etc.) revisa el README.
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const note = document.getElementById('form-note');

    if (!name || !email || !message) {
        note.style.color = '#ff6b9d';
        note.textContent = 'Por favor completa todos los campos.';
        return false;
    }

    // CAMBIA este email por el tuyo
    const yourEmail = 'matiasramirez@example.com';

    const subject = encodeURIComponent(`Portfolio - Mensaje de ${name}`);
    const body = encodeURIComponent(
        `Nombre: ${name}\n` +
        `Email: ${email}\n\n` +
        `Mensaje:\n${message}`
    );

    window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;

    note.style.color = '#64ffda';
    note.textContent = 'Abriendo tu cliente de correo...';

    // Limpiar formulario
    setTimeout(() => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }, 1500);

    return false;
}
