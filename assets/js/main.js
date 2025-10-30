// Datos de las clases
const clases = [
    {
        numero: 1,
        titulo: "HTML Básico",
        descripcion: "Introducción a la Web y estructura básica de HTML.",
        ejercicios: ["guillermo_cochrane.html"],
        enlace: "clases/clase01-html-basico/"
    },
    {
        numero: 2,
        titulo: "Enlaces y Formularios",
        descripcion: "Estructura HTML, enlaces internos/externos y formularios.",
        ejercicios: ["formulario_contacto.html", "listas.html"],
        enlace: "clases/clase02-enlaces-formularios/"
    },
    {
        numero: 3,
        titulo: "Tablas e Imágenes",
        descripcion: "Creación de tablas e inserción de imágenes en HTML.",
        ejercicios: ["galeria.html", "tabla_contactos.html"],
        enlace: "clases/clase03-tablas-imagenes/"
    },
    {
        numero: 4,
        titulo: "Inputs de Formulario",
        descripcion: "Diferentes tipos de inputs y formularios complejos.",
        ejercicios: ["formulario_registro.html"],
        enlace: "clases/clase04-inputs/"
    },
    {
        numero: 5,
        titulo: "HTML Semántico y CSS",
        descripcion: "HTML5 semántico y principios básicos de CSS.",
        ejercicios: ["pagina_semantica.html"],
        enlace: "clases/clase05-html-semantico-css/"
    },
    {
        numero: 6,
        titulo: "Repaso de CSS",
        descripcion: "Selectores CSS, box model y prácticas de diseño.",
        ejercicios: ["index.html"],
        enlace: "clases/clase06-repaso-css/"
    },
    {
        numero: 7,
        titulo: "Introducción a JavaScript",
        descripcion: "Fundamentos de JavaScript y manipulación del DOM.",
        ejercicios: ["app.js", "clase_teorica_9.html"],
        enlace: "clases/clase07-intro-js/"
    },
    {
        numero: 8,
        titulo: "Tipos de Datos en JS",
        descripcion: "Variables, operadores, condicionales y bucles en JavaScript.",
        ejercicios: ["script.js"],
        enlace: "clases/clase08-tipos-datos-js/"
    },
    {
        numero: 9,
        titulo: "Eventos en JavaScript",
        descripcion: "Manejo de eventos y interacciones del usuario.",
        ejercicios: ["clase_teorica_11.html", "clase_teorica_11_2.html", "ejemplo_profe.html"],
        enlace: "clases/clase09-eventos-js/"
    },
    {
        numero: 10,
        titulo: "Proyecto con JavaScript",
        descripcion: "Aplicación de conceptos de JavaScript en un proyecto.",
        ejercicios: ["index.html"],
        enlace: "clases/clase10-proyecto-js/"
    },
    {
        numero: 11,
        titulo: "Calculadora con JS",
        descripcion: "Desarrollo de una calculadora funcional con JavaScript.",
        ejercicios: ["notas.md"],
        enlace: "clases/clase11-calculadora/"
    },
    {
        numero: 12,
        titulo: "Introducción a Bootstrap",
        descripcion: "Framework Bootstrap y sistema de grid responsive.",
        ejercicios: [],
        enlace: "clases/clase12-bootstrap/"
    },
    {
        numero: 13,
        titulo: "Bootstrap Avanzado",
        descripcion: "Componentes avanzados y personalización de Bootstrap.",
        ejercicios: ["clase_teorica_15.html"],
        enlace: "clases/clase13-bootstrap-avanzado/"
    }
];

// Función para generar las tarjetas de clases
function generarTarjetasClases() {
    const container = document.getElementById('clases-container');
    
    clases.forEach(clase => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 mb-4';
        
        col.innerHTML = `
            <article class="card h-100 shadow">
                <div class="card-body">
                    <h5 class="card-title">Clase ${clase.numero}: ${clase.titulo}</h5>
                    <p class="card-text">${clase.descripcion}</p>
                    <details class="mb-2">
                        <summary><strong>Ejercicios:</strong></summary>
                        <ul class="list-unstyled">
                            ${clase.ejercicios.map(ej => `<li><a href="${clase.enlace}${ej}" target="_blank">${ej}</a></li>`).join('')}
                        </ul>
                    </details>
                </div>
                <div class="card-footer bg-transparent">
                    <a href="${clase.enlace}" class="btn btn-primary btn-sm">Ver Clase Completa</a>
                </div>
            </article>
        `;
        
        container.appendChild(col);
    });
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', generarTarjetasClases);