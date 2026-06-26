# Portfolio - Ingeniero Civil en Automatización

Portfolio web personal listo para desplegar en **GitHub Pages** (gratis, con tu URL `tuusuario.github.io`).

## Estructura del proyecto

```
portfolio-github-pages/
├── index.html        ← Estructura y contenido
├── styles.css        ← Estilos (tema oscuro + animaciones)
├── script.js         ← Interactividad (menú, animaciones, formulario)
└── README.md         ← Esta guía
```

---

## PASO 1: Personalizar el contenido

Antes de subir nada, abre los archivos y reemplaza los marcadores:

### En `index.html`

| Busca | Reemplaza por |
|-------|---------------|
| `[Tu Nombre]` | Tu nombre real (aparece en título, hero y footer) |
| `[Tu ciudad, País]` | Tu ubicación |
| `tu@email.com` | Tu correo real (aparece varias veces) |
| `tuusuario` (en github.com / linkedin.com) | Tus usuarios reales |
| `TuNombre` (en logo navbar) | Tu nombre o apodo |

### En `script.js`

- Línea del final: cambia `tu@email.com` por tu correo en la función `handleSubmit`.

### Contenido sugerido para editar

- **Sección Sobre mí**: reescribe los párrafos con tu historia real.
- **Cursos**: ya hay 4 ejemplos + 1 plantilla. Copia la plantilla para agregar más.
- **Trabajos**: completa con tu experiencia real. Si no tienes, puedes eliminar esa sección o dejar solo la práctica.
- **Proyectos**: cambia los títulos y descripciones por tus proyectos.
- **Habilidades**: ajusta los porcentajes (`data-width="85%"` y el texto `85%`) y las tags.

> **Tip**: usa un editor como [VS Code](https://code.visualstudio.com/) o directamente el editor web de GitHub para editar.

---

## PASO 2: Crear cuenta en GitHub

1. Ve a **https://github.com/signup**
2. Crea una cuenta con un **nombre de usuario corto y profesional** (será parte de tu URL: `tuusuario.github.io`).
3. Verifica tu email.

> ⚠️ El nombre de usuario NO se puede cambiar fácilmente después. Elígelo bien.

---

## PASO 3: Crear un repositorio

1. En GitHub, haz click en el botón verde **"New"** o **"+"** → **"New repository"**.
2. **Nombre del repositorio**: debe ser EXACTAMENTE `tuusuario.github.io`
   - Por ejemplo, si tu usuario es `jperez`, el repo se llama `jperez.github.io`
3. **Visibility**: `Public` (necesario para GitHub Pages gratis).
4. **Initialize this repository with**: marca **"Add a README file"**.
5. Click en **"Create repository"**.

---

## PASO 4: Subir los archivos

Tienes dos opciones:

### Opción A: Subir por la web (la más simple)

1. En tu repositorio recién creado, haz click en **"Add file"** → **"Upload files"**.
2. Arrastra los 3 archivos: `index.html`, `styles.css`, `script.js`.
3. En "Commit changes", escribe: `Primer commit - portfolio inicial`.
4. Click en **"Commit changes"**.

### Opción B: Usar Git (recomendado si vas a editar mucho)

1. Instala Git: https://git-scm.com/downloads
2. Abre una terminal en la carpeta donde están los archivos:
   ```bash
   git init
   git add .
   git commit -m "Primer commit - portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/tuusuario/tuusuario.github.io.git
   git push -u origin main
   ```

> Si te pide credenciales, GitHub ya no acepta contraseña. Usa un **Personal Access Token**:
> Settings → Developer settings → Personal access tokens → Generate new token (clásico) → marca "repo" → copia el token y úsalo como contraseña.

---

## PASO 5: Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (pestaña superior).
2. En el menú izquierdo, busca **Pages** (sección "Code and automation").
3. En **"Source"**, selecciona:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click en **Save**.
5. Espera 1-2 minutos. Verás un mensaje verde con tu URL:

   ```
   ✅ Your site is live at https://tuusuario.github.io/
   ```

¡Listo! Tu portfolio ya está online y accesible desde cualquier dispositivo. 🎉

---

## PASO 6: Verificar y compartir

1. Abre tu URL: `https://tuusuario.github.io`
2. Verifica que todo se ve bien (texto, animaciones, responsive en móvil).
3. Si no se ve, espera 2-3 minutos y refresca con `Ctrl + Shift + R` (caché).
4. Comparte tu URL en LinkedIn, CV, email, etc.

---

## Cómo editar tu portfolio después

### Edición rápida (desde el navegador)

1. Entra a tu repositorio en GitHub.
2. Haz click en el archivo que quieres editar (ej: `index.html`).
3. Click en el ícono de lápiz ✏️ (arriba derecha del archivo).
4. Edita el contenido.
5. Al final de la página, escribe un mensaje de commit: `Actualizo sección sobre mí`.
6. Click en **"Commit changes"**.
7. En 1-2 minutos tu sitio se actualizará automáticamente.

### Edición local (más cómoda)

1. Clona el repo:
   ```bash
   git clone https://github.com/tuusuario/tuusuario.github.io.git
   ```
2. Edita los archivos con tu editor favorito (VS Code recomendado).
3. Sube los cambios:
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```

---

## Cómo agregar una nueva sección

### Ejemplo: agregar un nuevo curso

Abre `index.html`, busca la sección `<!-- ===== CURSOS ===== -->` y copia un bloque `<article class="course-card reveal">...</article>` entero. Cámbiale el contenido y pégalo dentro de `<div class="courses-grid">`.

```html
<article class="course-card reveal">
    <div class="course-top">
        <span class="course-platform">Coursera</span>
        <span class="course-status status-done">Completado</span>
    </div>
    <h3 class="course-title">Nombre del nuevo curso</h3>
    <p class="course-desc">
        Descripción de lo que aprendiste...
    </p>
    <div class="course-meta">
        <span class="course-date">2025</span>
        <span class="course-duration">30 h</span>
    </div>
</article>
```

### Ejemplo: agregar un nuevo trabajo

En la sección `<!-- ===== TRABAJOS ===== -->`, copia un bloque `<div class="timeline-item reveal">...</div>` y pégalo dentro de `<div class="timeline">`. Los más recientes van arriba.

---

## Personalización avanzada

### Cambiar colores

Edita las variables CSS al inicio de `styles.css`:

```css
:root {
    --accent-cyan: #64ffda;    /* Color principal de acento */
    --accent-purple: #7c5cff;  /* Color secundario */
    --bg-primary: #0a0e1a;     /* Fondo principal */
}
```

Sitios útiles para elegir paletas:
- https://coolors.co/
- https://htmlcolorcodes.com/

### Cambiar fuentes

En `index.html`, modifica la línea `<link href="https://fonts.googleapis.com/...">` y cambia `'Inter'` por la fuente que prefieras de Google Fonts. Luego actualiza `--font-sans` en `styles.css`.

### Cambiar la foto del hero

Actualmente hay una "ventana de código" decorativa. Si prefieres una foto:
1. Sube tu foto al repo (ej: `foto.jpg`).
2. Reemplaza el bloque `<div class="hero-visual">...</div>` por:
   ```html
   <div class="hero-visual reveal">
       <img src="foto.jpg" alt="Tu Nombre" class="hero-photo">
   </div>
   ```
3. Agrega en `styles.css`:
   ```css
   .hero-photo {
       width: 320px;
       height: 320px;
       object-fit: cover;
       border-radius: 20px;
       border: 2px solid var(--accent-cyan);
       box-shadow: var(--shadow-glow);
   }
   ```

---

## Sobre el formulario de contacto

Como GitHub Pages solo sirve archivos estáticos (sin backend), el formulario abre el cliente de email del visitante con los datos pre-cargados (`mailto:`).

### Si quieres un formulario funcional gratis

Usa [Formspree](https://formspree.io/) (gratis hasta 50 envíos/mes):

1. Crea cuenta en Formspree y crea un formulario.
2. Copia tu ID (ej: `mwkdleqr`).
3. En `index.html`, cambia la línea del form:
   ```html
   <form class="contact-form reveal" action="https://formspree.io/f/mwkdleqr" method="POST">
   ```
4. Elimina `onsubmit="return handleSubmit(event)"`.
5. En `script.js`, elimina la función `handleSubmit` (o déjala, no afecta).

---

## Problemas comunes

| Problema | Solución |
|----------|----------|
| Mi sitio no carga | Espera 2-3 minutos tras activar Pages. Verifica que el repo se llame EXACTAMENTE `tuusuario.github.io`. |
| Veo el HTML anterior | Refresca con `Ctrl + Shift + R` (caché) o usa ventana de incógnito. |
| El CSS no se aplica | Verifica que `styles.css` esté en la misma carpeta que `index.html`. |
| Las imágenes no cargan | Las rutas son sensibles a mayúsculas. `Foto.jpg` ≠ `foto.jpg`. |
| Cambié algo y no se ve | GitHub Pages tarda 1-2 min en publicar. Revisa el estado en Settings → Pages. |

---

## Recursos útiles

- **Documentación oficial GitHub Pages**: https://docs.github.com/es/pages
- **Google Fonts**: https://fonts.google.com/
- **Iconos SVG gratuitos**: https://iconsvg.xyz/ o https://heroicons.com/
- **Imágenes libres**: https://unsplash.com/ o https://pexels.com/
- **Aprender HTML/CSS**: https://www.freeCodeCamp.org (gratis)

---

## ¿Qué sigue?

Una vez que tengas tu portfolio funcionando, puedes:

1. **Agregar Google Analytics** para ver quién visita tu sitio (gratis).
2. **Comprar un dominio personalizado** (ej: `tunombre.cl`) y conectarlo a GitHub Pages (~$10 USD/año en Namecheap o GoDaddy).
3. **Agregar un blog** usando Jekyll (generador estático integrado con GitHub Pages).
4. **Optimizar SEO** con meta tags y Open Graph para que se vea bien al compartir en redes.

¡Mucho éxito con tu portfolio! 🚀
