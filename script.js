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
    const yourEmail = 'matiasramirez705@gmail.com';

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

// ===== COPIAR EMAIL AL PORTAPAPELES =====
// Se usa desde:
//   1. El ícono de email en el hero (#email-link)
//   2. El enlace de email en la sección contacto (#email-link-contact)
//   3. El botón "copiar" junto al email en contacto
//
// Comportamiento:
//   - Copia el email al portapapeles (con fallback para navegadores antiguos)
//   - Muestra un mensaje temporal "Correo copiado ✓"
//   - Si el trigger es un <a href="mailto:...">, también abre la app de correo
//     tras 400ms (para que el mensaje sea visible primero)
//
// Parámetros:
//   event       → el evento del click
//   msgId       → id del elemento <span> donde mostrar el mensaje
//   customEmail → (opcional) email a copiar; si no se pasa, se usa PORTFOLIO_EMAIL

const PORTFOLIO_EMAIL = 'matiasramirez705@gmail.com';

function copyEmail(event, msgId, customEmail) {
    if (event) event.preventDefault();

    const email = customEmail || PORTFOLIO_EMAIL;
    const msg = document.getElementById(msgId);

    // Intentar con la API moderna del portapapeles
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email)
            .then(() => showCopyMsg(msg))
            .catch(() => {
                fallbackCopyText(email);
                showCopyMsg(msg);
            });
    } else {
        // Fallback para navegadores antiguos / contextos no seguros
        fallbackCopyText(email);
        showCopyMsg(msg);
    }

    // Si el trigger fue un <a href="mailto:...">, abrir cliente de correo
    // después de un pequeño delay para que el mensaje "copiado" sea visible
    const link = event && event.currentTarget;
    if (link && link.tagName === 'A' && link.getAttribute('href') && link.getAttribute('href').startsWith('mailto:')) {
        setTimeout(() => {
            window.location.href = link.getAttribute('href');
        }, 400);
    }
}

// Fallback para copiar texto cuando navigator.clipboard no está disponible
function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
    } catch (e) {
        // Silencioso: el mailto: de todas formas abrirá el cliente
    }
    document.body.removeChild(textarea);
}

// Muestra el mensaje "Correo copiado ✓" por 2.5 segundos
function showCopyMsg(msgEl) {
    if (!msgEl) return;
    msgEl.classList.add('show');
    clearTimeout(msgEl._copyTimer);
    msgEl._copyTimer = setTimeout(() => {
        msgEl.classList.remove('show');
    }, 2500);
}
