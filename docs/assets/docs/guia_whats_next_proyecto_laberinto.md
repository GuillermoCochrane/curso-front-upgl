# Guía de Proyecto: Despertar en el laberinto

**Nombre del Proyecto:** Despertar en el laberinto  
**Descripción:** Blog de análisis narrativo y filosófico sobre *Westworld* y otras ficciones relacionadas. Basado en HTML estático con estructura semántica, accesible y mobile-first.  
**Contexto:** Proyecto integrador de curso. Evoluciona con cada nuevo contenido visto en clase (HTML, CSS, JS).  

---

## ✅ Estado actual del proyecto

### 📁 Estructura general
- `index.html`: Portada del blog, con introducción, motivación personal y acceso a análisis.
- `episodios/`: Carpeta con subcarpetas por episodio (`episodio-01/`, `episodio-02/`, etc.).
  - Dentro: `episodio.html` y posibles ensayos relacionados.
- `assets/`: Imágenes, hojas de estilo y scripts.
- `sobre-mi.html`: En construcción como manifiesto del proyecto.
- `contacto.html`: Formulario de feedback/teorías.

### 🎨 Diseño y funcionalidad
- Mobile-first con `flexbox` y estructura modular.
- CSS dividido (`base.css`, `layout.css`, `index.css`, etc.).
- Toggle JS funcional (☰ / ✖).
- Imágenes con `alt`, semántica bien aplicada (`<section>`, `<article>`, `<time>`, etc.).
- Meta SEO (`description`, `author`, `keywords`).
- Indexado por Google y alojado en GitHub Pages.

---

## 🧭 Guía de desarrollo por fases

### 🔹 Fase 1 – Fundacional (completada)
- ✅ HTML semántico.
- ✅ Navegación consistente.
- ✅ Primer episodio (`episodio-01.html`) con análisis dividido por secciones.
- ✅ Ensayos relacionados (Matrix, Sucker Punch, RATM).
- ✅ Estructura clara de carpetas y enlaces relativos.

### 🔹 Fase 2 – Estilización básica (en curso)
- ✅ Primeros estilos CSS (estructura, paleta clara, fuentes).
- 🛠 Mejora progresiva de estilos: tipografía, márgenes, estructura visual.

### 🔹 Fase 3 – Interactividad simple (próxima)
- ⏳ Modo oscuro con toggle + `localStorage`.
- ⏳ Scroll suave, botones "volver arriba".
- ⏳ Filtros por temporada o temática en episodios.

### 🔹 Fase 4 – Accesibilidad y SEO avanzado
- ⏳ Uso de `aria-label`, `tabindex`, navegación con teclado.
- ⏳ Validación con Lighthouse.
- ⏳ Revisión de estructura de encabezados (`<h1>`-`<h6>`).

### 🔹 Fase 5 – Escalabilidad y documentación
- ⏳ Plantilla base reutilizable para episodios.
- ⏳ Estilos por componente (en lugar de página).
- ⏳ Documentación interna (`README.md`, comentarios en código).

---

## ✏️ Notas adicionales
- Proyecto va creciendo con el curso.
- Prioridad: claridad estructural, contenido propio, y código limpio.
- Estética simple pero funcional (no estilo CERN 1998).

---

## 🚀 Próximos pasos sugeridos
1. Crear `episodio-plantilla.html`.
2. Implementar modo oscuro.
3. Reorganizar rutas rotas o redundantes (`../,,/`).
4. Añadir manifestación filosófica en `sobre-mi.html`.

> _“Donde las series no se miran: se descifran.”_

