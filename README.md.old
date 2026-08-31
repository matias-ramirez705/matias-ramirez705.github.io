# Portafolio - Matías Ignacio Ramírez Benavides

Portfolio web personal desplegado en **GitHub Pages** (gratis, en `https://matias-ramirez705.github.io`).

---

## Tabla de contenidos

1. [Archivos del proyecto](#archivos-del-proyecto)
2. [Cómo editar el portfolio](#cómo-editar-el-portfolio)
3. [Guía rápida: cambios más comunes](#guía-rápida-cambios-más-comunes)
   - Cambiar mi nombre, email o redes sociales
   - Cambiar los textos del Hero (presentación)
   - Cambiar los textos de "Sobre mí"
   - Agregar un curso nuevo
   - Agregar una experiencia laboral nueva
   - Agregar un proyecto nuevo
   - Cambiar las habilidades y porcentajes
   - Agregar un documento PDF descargable
   - Cambiar los colores del sitio
   - Cambiar la foto del hero (la "ventana de código")
4. [Dónde está cada cosa en el código](#dónde-está-cada-cosa-en-el-código)
5. [Cómo subir los cambios a GitHub](#cómo-subir-los-cambios-a-github)
6. [Problemas comunes y soluciones](#problemas-comunes-y-soluciones)
7. [Consejos y buenas prácticas](#consejos-y-buenas-prácticas)

---

## Archivos del proyecto

```
portfolio-github-pages/
├── index.html        ← Estructura y contenido (textos, secciones, enlaces)
├── styles.css        ← Estilos visuales (colores, tamaños, animaciones)
├── script.js         ← Comportamiento (menú mobile, animaciones, formulario)
├── favicon.svg       ← Icono que aparece en la pestaña del navegador
├── README.md         ← Esta guía
└── Documentos/       ← Carpeta con tus PDFs (CV, carta, certificados)
    ├── Curriculum_vitae_Matías_Ignacio_Ramírez_Benavides.pdf
    └── Resumen_Profesional_Matías_Ignacio_Ramírez_Benavides.pdf
```

**Resumen de qué hace cada archivo:**
- **`index.html`**: contiene todo el texto que se ve en la página (tu nombre, descripciones, lista de cursos, trabajos, etc.). Es el archivo que más vas a editar.
- **`styles.css`**: controla cómo se ve todo (colores, fuentes, tamaños, disposición). Lo editas solo si quieres cambiar colores o estilos visuales.
- **`script.js`**: hace que el menú funcione en mobile, que las animaciones aparezcan al hacer scroll, y que el botón de email copie al portapapeles. Rara vez lo editas.
- **`favicon.svg`**: icono que aparece en la pestaña del navegador (arriba, al lado del título). Es un SVG con el símbolo `</>` en gradiente cian-morado.

---

## Cómo editar el portfolio

Tienes dos opciones:

### Opción A: Editar desde la web de GitHub (la más fácil)

1. Entra a **https://github.com/Krou705/Krou705.github.io**
2. Haz click en el archivo que quieres editar (ej: `index.html`)
3. Click en el ícono de **lápiz ✏️** (arriba derecha)
4. Haz los cambios que necesites
5. Scroll hasta abajo → en "Commit changes" escribe una descripción corta del cambio (ej: `Agrego curso de Python`)
6. Click en **"Commit changes"**
7. Espera 1-2 minutos y refresca tu página con `Ctrl + Shift + R`

### Opción B: Editar en tu computador (recomendado para cambios grandes)

1. **Instala VS Code** (gratis): https://code.visualstudio.com/
2. **Descarga el ZIP** del proyecto y descomprímelo
3. Abre la carpeta con VS Code
4. Edita los archivos
5. Sube los cambios a GitHub (ver sección [Cómo subir los cambios a GitHub](#cómo-subir-los-cambios-a-github))

---

## Guía rápida: cambios más comunes

### Cambiar mi nombre, email o redes sociales

**En `index.html`**, busca y reemplaza:

| Busca | Reemplaza por |
|-------|---------------|
| `Matías Ignacio Ramírez` | Tu nombre real (aparece en el hero) |
| `matiasramirez705@gmail.com` | Tu email real (aparece en hero, contacto y formulario) |
| `Krou705` (en github.com) | Tu usuario real de GitHub |
| `matiasramirez` (en linkedin.com) | Tu usuario real de LinkedIn |

**Tip para encontrar rápido**: usa `Ctrl + F` (Cmd + F en Mac) para buscar en el archivo.

**En `script.js`**, también busca y reemplaza:
- `matiasramirez705@gmail.com` → tu email real (aparece 2 veces)

---

### Cambiar los textos del Hero (presentación)

El Hero es la primera sección que se ve al entrar, con tu nombre grande y la descripción.

**En `index.html`**, busca la sección `<!-- ===== HERO / SOBRE MÍ ===== -->` y edita:

```html
<h1 class="hero-name">Matías Ignacio Ramírez</h1>           ← Tu nombre
<h2 class="hero-title">
    <span class="gradient-text">Ingeniero Civil en Automatización</span>  ← Tu título profesional
</h2>
<p class="hero-description">
    Ingeniero Civil en Automatización egresado de la...     ← Tu descripción corta
</p>
```

También puedes editar la "ventana de código" que aparece al lado (el cuadro que simula un archivo `perfil.json`):

```html
<pre class="code-body"><code><span class="c-key">{
</span>  <span class="c-prop">"nombre"</span>: <span class="c-str">"Matías Ramírez Benavides"</span>,
  <span class="c-prop">"profesion"</span>: <span class="c-str">"Ing. Civil en Automatización"</span>,
  ...
```

---

### Cambiar los textos de "Sobre mí"

**En `index.html`**, busca `<!-- ===== SOBRE MÍ ===== -->` y edita los párrafos dentro de `<div class="about-text">`:

```html
<p class="about-lead">
    Ingeniero Civil en Automatización egresado de la Universidad del Bío-Bío...  ← Párrafo principal
</p>
<p>
    Mi experiencia incluye integración de tableros...  ← Segundo párrafo
</p>
```

Para usar **negrita** en un texto, envuélvelo en `<strong>`:
```html
<p>Tengo experiencia en <strong>PLC Siemens</strong> y Python.</p>
```

La tarjeta lateral con datos rápidos está en `<div class="about-card">`. Edita los valores dentro de `<span class="info-value">`:

```html
<div class="info-item">
    <span class="info-label">Ubicación</span>
    <span class="info-value">Santa Juana, Chile</span>     ← Cámbialo por tu ciudad
</div>
```

---

### Agregar un curso nuevo

**En `index.html`**, busca `<!-- ===== CURSOS ===== -->`. Al inicio de la sección verás un comentario con la **plantilla lista para copiar**.

Pasos:
1. Copia el bloque `<article class="course-card reveal">...</article>` (de la plantilla en el comentario, o copia uno existente)
2. Pégalo **dentro de `<div class="courses-grid">`**, después del último curso
3. Cambia los textos:

```html
<article class="course-card reveal">
    <div class="course-top">
        <span class="course-platform">Coursera</span>          ← Plataforma
        <span class="course-status status-done">Completado</span>  ← "status-done" o "status-progress"
    </div>
    <h3 class="course-title">Machine Learning con Python</h3>  ← Nombre del curso
    <p class="course-desc">
        Curso de 40 horas sobre algoritmos de ML...            ← Descripción
    </p>
    <div class="course-meta">
        <span class="course-date">2025</span>                  ← Año
        <span class="course-duration">40 horas</span>          ← Duración
    </div>
</article>
```

**Estados disponibles para `course-status`:**
- `status-done` → muestra "Completado" en verde
- `status-progress` → muestra "En progreso" en amarillo

---

### Agregar una experiencia laboral nueva

**En `index.html`**, busca `<!-- ===== TRABAJOS / EXPERIENCIA ===== -->`. Al inicio de la sección verás la plantilla.

**Importante**: los trabajos más recientes van ARRIBA. Si agregas uno nuevo, ponlo al principio de la lista, después de `<div class="timeline">`.

```html
<div class="timeline-item reveal">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3 class="timeline-role">Ingeniero de Automatización</h3>  ← Tu cargo
            <span class="timeline-date">Ene 2025 — Actualidad</span>    ← Fechas
        </div>
        <h4 class="timeline-company">Empresa XYZ</h4>                   ← Empresa
        <ul class="timeline-tasks">
            <li>Programación de PLCs S7-1200...</li>                    ← Tarea 1
            <li>Integración de tableros eléctricos...</li>              ← Tarea 2 (puedes agregar/quitar <li>)
            <li>Documentación técnica de proyectos...</li>              ← Tarea 3
        </ul>
        <div class="timeline-tags">
            <span class="tag">PLC</span>                                ← Tag de habilidad
            <span class="tag">TIA Portal</span>                         ← Puedes agregar más <span class="tag">
            <span class="tag">AutoCAD</span>
        </div>
    </div>
</div>
```

---

### Agregar un proyecto nuevo

**En `index.html`**, busca `<!-- ===== PROYECTOS ===== -->`. Al inicio de la sección verás la plantilla.

```html
<article class="project-card reveal">
    <div class="project-image project-image-1">         ← Cambia "1" por "2" o "3" para variar el color de fondo
        <div class="project-overlay">
            <span class="project-category">IoT</span>   ← Categoría (IA, IoT, Automatización, etc.)
        </div>
    </div>
    <div class="project-body">
        <h3 class="project-title">Nombre del proyecto</h3>
        <p class="project-desc">
            Descripción de qué hace el proyecto, qué problema resuelve,
            qué tecnologías usaste, etc.
        </p>
        <div class="project-tech">
            <span>ESP32</span>          ← Tecnología 1
            <span>Python</span>         ← Tecnología 2 (puedes agregar más <span>)
            <span>MQTT</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/Krou705" target="_blank" rel="noopener">Ver código →</a>
            <!-- Si tienes una demo online, agrega: -->
            <!-- <a href="https://mi-demo.com" target="_blank" rel="noopener">Demo →</a> -->
        </div>
    </div>
</article>
```

**Colores de fondo disponibles para los proyectos:**
- `project-image-1` → Verde azulado (ideal para automatización)
- `project-image-2` → Morado (ideal para análisis de datos/IA)
- `project-image-3` → Verde (ideal para IoT/sustentabilidad)

---

### Cambiar las habilidades y porcentajes

**En `index.html`**, busca `<!-- ===== HABILIDADES ===== -->`. Hay 2 tipos de bloques:

**Tipo 1: Con barra de porcentaje**
```html
<div class="skill-bar">
    <div class="skill-info">
        <span>PLC Siemens S7-1200 (TIA Portal)</span>   ← Nombre de la habilidad
        <span>85%</span>                                 ← Porcentaje visible
    </div>
    <div class="skill-track">
        <div class="skill-fill" data-width="85%"></div>  ← MISMO porcentaje aquí
    </div>
</div>
```

⚠️ **MUY IMPORTANTE**: El porcentaje debe aparecer **2 veces** y ser el mismo en ambos lugares:
1. En el texto visible: `<span>85%</span>`
2. En el atributo `data-width`: `data-width="85%"`

Si los números no coinciden, la barra se llenará distinto al porcentaje mostrado.

**Tipo 2: Con tags (sin porcentaje)**
```html
<div class="skill-category reveal">
    <h3 class="skill-cat-title">Programación y Herramientas</h3>  ← Título de categoría
    <div class="skill-tags">
        <span class="skill-tag">Python</span>      ← Tag 1
        <span class="skill-tag">C/C++</span>       ← Tag 2
        <span class="skill-tag">Git</span>         ← Puedes agregar más
    </div>
</div>
```

**Para eliminar una habilidad**: borra todo el bloque `<div class="skill-bar">...</div>` o `<span class="skill-tag">...</span>`.

**Para agregar una nueva categoría**: copia todo un bloque `<div class="skill-category reveal">...</div>` y pégalo al final de `<div class="skills-grid">`.

**Para hacer que una categoría ocupe todo el ancho** (como "Competencias"): agrega la clase `skill-full-width` al `<div class="skill-category">`:

```html
<!-- Antes: ocupa 1 columna -->
<div class="skill-category reveal">
    <h3 class="skill-cat-title">Competencias</h3>
    ...
</div>

<!-- Después: ocupa todo el ancho disponible -->
<div class="skill-category reveal skill-full-width">
    <h3 class="skill-cat-title">Competencias</h3>
    ...
</div>
```

Útil cuando una categoría tiene muchas tags y se ve mejor ocupando toda la fila.

---

### Agregar un documento PDF descargable

**Paso 1: Sube el PDF a tu repo**

1. Entra a https://github.com/Krou705/Krou705.github.io
2. Entra a la carpeta `Documentos/`
3. Click en **"Add file" → "Upload files"**
4. Arrastra tu PDF (ej: `Certificado_Coursera.pdf`)
5. Click en **"Commit changes"**

**Paso 2: Agrega la tarjeta en `index.html`**

Busca `<!-- ===== CONTACTO ===== -->` → luego `<div class="documents-grid">`. Al inicio verás la plantilla. Copia un bloque `<a class="doc-card">...</a>` existente y cámbialo:

```html
<a href="Documentos/Certificado_Coursera.pdf"          ← Ruta al PDF (debe coincidir con el nombre subido)
   target="_blank" rel="noopener" class="doc-card">
    <div class="doc-icon">
        <!-- (deja el SVG igual, es el ícono del documento) -->
        <svg viewBox="0 0 24 24" ...>...</svg>
    </div>
    <div class="doc-content">
        <span class="doc-label">Certificado · PDF</span>     ← Tipo de documento
        <span class="doc-name">Google Data Analytics</span>  ← Nombre visible
        <span class="doc-action">Ver / Descargar →</span>    ← Texto del enlace
    </div>
</a>
```

⚠️ **Cuidado con los nombres de archivos**: GitHub distingue mayúsculas/minúsculas. Si subes `Certificado.pdf` pero en el HTML pones `certificado.pdf` (minúscula), no funcionará.

**Recomendación**: usa nombres simples sin espacios ni tildes para evitar problemas:
- ✅ `cv-matias.pdf`
- ✅ `certificado-coursera.pdf`
- ❌ `CV Matías Ramírez Benavides.pdf`

---

### Cambiar los colores del sitio

**En `styles.css`**, al inicio (línea ~10) verás un bloque `:root { ... }` con todas las variables de color:

```css
:root {
    --bg-primary: #0a0e1a;       /* Fondo principal de la página */
    --bg-secondary: #0f1424;     /* Fondo de secciones alternas */
    --bg-tertiary: #161b2e;      /* Fondo de campos de formulario */
    --bg-card: #131826;          /* Fondo de tarjetas */

    --text-primary: #e6edf3;     /* Texto principal (casi blanco) */
    --text-secondary: #a0a8b8;   /* Texto secundario (gris) */
    --text-muted: #6b7280;       /* Texto tenue (gris oscuro) */

    --accent-cyan: #64ffda;      /* Color de acento principal (cian verdoso) */
    --accent-purple: #7c5cff;    /* Color de acento secundario (morado) */
    --accent-blue: #4d8eff;
    --accent-pink: #ff6b9d;

    /* ... más variables ... */
}
```

**Para cambiar un color**, modifica el valor hexadecimal (empieza con `#`). Por ejemplo, para cambiar el color de acento principal de cian a naranja:

```css
--accent-cyan: #ff8c42;    /* Naranja en lugar de cian */
```

**Herramientas útiles para elegir colores:**
- https://coolors.co/ → Genera paletas completas
- https://htmlcolorcodes.com/ → Encuentra el código hex de cualquier color
- https://color.adobe.com/ → Rueda cromática interactiva

**Paletas sugeridas (copia y pega en `:root`):**

**Tema azul corporativo:**
```css
--accent-cyan: #3b82f6;
--accent-purple: #1e40af;
```

**Tema verde natural:**
```css
--accent-cyan: #10b981;
--accent-purple: #059669;
```

**Tema naranja cálido:**
```css
--accent-cyan: #f97316;
--accent-purple: #dc2626;
```

---

### Cambiar la foto del hero (la "ventana de código")

Actualmente, en el Hero aparece una "ventana de código" decorativa con tu info en formato JSON. Si prefieres poner una foto tuya:

**Paso 1**: Sube tu foto al repo (ej: `foto.jpg` en la raíz, no en `Documentos/`).

**Paso 2**: En `index.html`, busca `<div class="hero-visual reveal">` y reemplaza todo el contenido por:

```html
<div class="hero-visual reveal">
    <img src="foto.jpg" alt="Matías Ramírez" class="hero-photo">
</div>
```

**Paso 3**: En `styles.css`, agrega al final:

```css
.hero-photo {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 14px;
    border: 2px solid var(--accent-cyan);
    box-shadow: 0 0 40px rgba(100, 255, 218, 0.15);
}
```

---

### Cambiar el favicon (icono de la pestaña del navegador)

El favicon es el icono que aparece en la pestaña del navegador, al lado del título de la página. Actualmente es un SVG con el símbolo `</>` en gradiente cian-morado.

**Opción 1: Usar un icono SVG propio**

1. Crea o descarga un icono en formato SVG (cuadrado, idealmente 64x64)
2. Súbelo al repositorio con el nombre `favicon.svg` (reemplazando el actual)
3. No necesitas tocar el HTML, el `<link>` ya está configurado

**Opción 2: Usar una imagen PNG o JPG**

1. Sube tu imagen (ej: `favicon.png`) al repositorio
2. En `index.html`, busca estas líneas en el `<head>`:
   ```html
   <link rel="icon" type="image/svg+xml" href="favicon.svg">
   <link rel="apple-touch-icon" href="favicon.svg">
   ```
3. Cámbialas por:
   ```html
   <link rel="icon" type="image/png" href="favicon.png">
   <link rel="apple-touch-icon" href="favicon.png">
   ```

**Opción 3: Crear un favicon online**

- https://favicon.io/ → genera favicons a partir de texto, imágenes o emojis
- https://realfavicongenerator.net/ → genera favicons para todos los dispositivos y navegadores

**Tip**: el favicon puede tardar 24-48 horas en actualizarse en el navegador debido a la caché. Para verlo rápido, abre en incógnito o limpia caché con `Ctrl + Shift + R`.

---

## Dónde está cada cosa en el código

Mapa rápido de qué buscar en `index.html` para encontrar cada sección:

| Sección | Busca este comentario en `index.html` |
|---------|---------------------------------------|
| Navbar (menú superior) | `<!-- ===== NAVBAR ===== -->` |
| Hero (presentación principal) | `<!-- ===== HERO / SOBRE MÍ ===== -->` |
| Sobre mí | `<!-- ===== SOBRE MÍ ===== -->` |
| Cursos y certificaciones | `<!-- ===== CURSOS ===== -->` |
| Experiencia profesional | `<!-- ===== TRABAJOS / EXPERIENCIA ===== -->` |
| Proyectos | `<!-- ===== PROYECTOS ===== -->` |
| Habilidades | `<!-- ===== HABILIDADES ===== -->` |
| Contacto + Documentos | `<!-- ===== CONTACTO ===== -->` |
| Footer (pie de página) | `<!-- ===== FOOTER ===== -->` |

**Plantillas para copiar/pegar**: cada sección repetible (cursos, trabajos, proyectos, habilidades, documentos) tiene un comentario `PLANTILLA PARA AGREGAR...` al inicio con el bloque listo para copiar.

---

## Cómo subir los cambios a GitHub

### Método 1: Por la web (más simple, para cambios chicos)

1. Entra a https://github.com/Krou705/Krou705.github.io
2. Click en el archivo que modificaste (ej: `index.html`)
3. Click en el ícono de **lápiz ✏️**
4. Haz tus cambios
5. Scroll abajo → "Commit changes" → escribe qué cambiaste
6. Click en **"Commit changes"**
7. Espera 1-2 minutos → refresca tu web con `Ctrl + Shift + R`

### Método 2: Subir archivo completo (para cambios grandes)

1. Entra a tu repo en GitHub
2. Click en **"Add file" → "Upload files"**
3. Arrastra los archivos modificados (`index.html`, `styles.css`, etc.)
4. Si te pregunta si quieres reemplazar, dile que **sí**
5. "Commit changes" → escribe descripción → click en commit

### Método 3: Con Git (avanzado, para usuarios técnicos)

```bash
# Clona el repo (solo la primera vez)
git clone https://github.com/Krou705/Krou705.github.io.git
cd Krou705.github.io

# Edita los archivos con tu editor favorito (VS Code)
# ...

# Sube los cambios
git add .
git commit -m "Descripción del cambio"
git push
```

> **Nota sobre autenticación**: GitHub ya no acepta contraseñas. Necesitas un Personal Access Token: Settings → Developer settings → Personal access tokens → Generate new token (clásico) → marca "repo" → úsalo como contraseña.

---

## Problemas comunes y soluciones

### "Modifiqué el archivo pero no se ve el cambio en la web"

**Causa**: el navegador tiene la versión antigua guardada en caché.

**Solución**: refresca con `Ctrl + Shift + R` (Windows/Linux) o `Cmd + Shift + R` (Mac). Si eso no funciona, abre la página en una ventana de incógnito.

También puede ser que GitHub Pages tarde 1-2 minutos en actualizarse. Espera y refresca de nuevo.

---

### "Aparece un error 404 al hacer click en Descargar CV"

**Causa**: el nombre del archivo en el HTML no coincide con el nombre real en GitHub.

**Solución**:
1. Verifica el nombre EXACTO del PDF en tu repo (mayúsculas, minúsculas, espacios, tildes)
2. En `index.html`, asegúrate de que el `href` coincida EXACTAMENTE:
   ```html
   <!-- Si el archivo se llama "Curriculum_vitae_Matías_Ignacio_Ramírez_Benavides.pdf" -->
   <a href="Documentos/Curriculum_vitae_Matías_Ignacio_Ramírez_Benavides.pdf">
   ```
3. Si no funciona, **renombra el PDF** a algo simple (ej: `cv.pdf`) y actualiza el `href`:
   ```html
   <a href="Documentos/cv.pdf">
   ```

---

### "El botón de email no copia al portapapeles"

**Causa posible**: `navigator.clipboard` solo funciona en HTTPS o localhost. GitHub Pages es HTTPS, así que debería funcionar. Si no, prueba:

1. Verifica que `script.js` esté cargado al final del `<body>` en `index.html`:
   ```html
   <script src="script.js"></script>
   </body>
   ```
2. Abre la consola del navegador (F12) → pestaña "Console" → revisa si hay errores en rojo
3. Prueba en otro navegador (Chrome, Firefox, Edge)

---

### "Se rompió todo después de editar"

**Causa probable**: borraste accidentalmente una etiqueta HTML como `</div>` o `</article>`.

**Solución**:
1. En GitHub, entra al archivo que editaste
2. Click en "History" (historial)
3. Busca la versión anterior que funcionaba
4. Click en "..." → "View file" → copia todo el contenido
5. Vuelve a la versión actual, pega el contenido viejo y guarda

**Para prevenir esto**: haz cambios pequeños y guarda (commit) después de cada cambio. Así si algo se rompe, sabes exactamente qué fue.

---

### "Las animaciones de las barras de habilidades no se ven"

**Causa**: los porcentajes no coinciden entre el texto visible y el `data-width`.

**Solución**: revisa que cada barra tenga el mismo número en ambos lugares:
```html
<!-- CORRECTO -->
<div class="skill-info"><span>Python</span><span>85%</span></div>
<div class="skill-track"><div class="skill-fill" data-width="85%"></div></div>

<!-- INCORRECTO (no coincide) -->
<div class="skill-info"><span>Python</span><span>85%</span></div>
<div class="skill-track"><div class="skill-fill" data-width="70%"></div></div>
```

---

## Consejos y buenas prácticas

### 1. Haz commits pequeños y descriptivos

En vez de hacer 10 cambios y subirlos todos juntos con el mensaje "actualizaciones", haz:
- "Agrego curso de Machine Learning"
- "Cambio email en contacto"
- "Actualizo descripción del hero"

Así si algo se rompe, es fácil volver atrás.

### 2. Usa `Ctrl + F` para buscar

Tanto en tu editor como en GitHub web, `Ctrl + F` (Cmd + F en Mac) te permite buscar texto. Útil para encontrar rápido qué quieres editar.

### 3. No borres comentarios `<!-- ... -->`

Los comentarios HTML (texto entre `<!--` y `-->`) no se ven en la página, pero te ayudan a orientarte. Mantén los comentarios de sección (`<!-- ===== CURSOS ===== -->`) y las plantillas.

### 4. Prueba en mobile

Después de cada cambio, abre tu web desde el celular. El diseño es responsive (se adapta), pero a veces conviene verificar que todo se vea bien en pantallas chicas.

### 5. Mantén una copia de seguridad

Cada cierto tiempo, descarga el ZIP de tu repo desde GitHub (Code → Download ZIP) y guárdalo en tu computador o en la nube. Así tienes un respaldo por si algo sale mal.

### 6. Cuando agregues contenido, sé específico

En vez de:
> "Trabajé en proyectos de automatización."

Mejor:
> "Programé PLCs Siemens S7-1200 en TIA Portal para controlar 3 líneas de producción, reduciendo un 15% los tiempos de cambio de formato."

**Cuantificar logros hace la diferencia** en un portfolio profesional.

### 7. Revisa la ortografía

Antes de hacer commit, copia el texto en un corrector ortográfico (o usa la función de tu navegador). Los errores typos dan mala impresión.

---

## Recursos útiles

- **Documentación GitHub Pages**: https://docs.github.com/es/pages
- **Aprender HTML/CSS gratis**: https://www.freecodecamp.org/espanol/
- **Google Fonts** (tipografías): https://fonts.google.com/
- **Iconos SVG gratuitos**: https://heroicons.com/ o https://iconsvg.xyz/
- **Paletas de colores**: https://coolors.co/
- **Imágenes libres de derecho**: https://unsplash.com/ o https://pexels.com/

---

## ¿Preguntas?

Si algo no te funciona o quieres agregar una función nueva, puedes:

1. **Revisar esta guía de nuevo** (la mayoría de los problemas comunes están acá)
2. **Buscar en Google** el mensaje de error o lo que quieres hacer (ej: "cómo cambiar el color de fondo en CSS")
3. **Pedir ayuda a una IA** (como ChatGPT, Claude o GLM) pegándole tu código y explicándole qué quieres hacer

¡Mucho éxito con tu portfolio! 🚀 Recuerda: está vivo, ve actualizándolo conforme aprendas cosas nuevas o tengas nuevos logros.
