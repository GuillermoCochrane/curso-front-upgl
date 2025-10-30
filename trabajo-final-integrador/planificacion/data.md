## **🎯 AJUSTAR EL PLAN SEGÚN REALIDAD DEL CURSO**

### **LO QUE NECESITO SABER:**
- **Nivel exacto de HTML/CSS/JS** Esto lo vas aver mas abajo, en el indice de la pagina del material de estudio
- **Qué partes de Bootstrap** fue introductorio, si bien hicimos ejemplos, mas que nada fue copiar cosas de la pagina de Bootstrap y adaptarlas a los ejemplos que hicimos
- **Si vieron conceptos de SPA** mas o menos, luego te paso un ejeplo que hicimos en clase, que me dio una idea como encarar los proyectos, ya que todos lo vimos en clase
- **Requisitos técnicos específicos** del profesor (no se que deberia responderte aca)
- **Depth de JavaScript** (funciones, DOM manipulation, eventos, etc.) si, vimos casi todos y la mayoria esta acostumbrado a consultar la IA como ayuda a la hora de programar

### **PARA ESTRUCTURAR MEJOR:**
- **Tareas que pueden hacer SOLOS** vs **tareas que necesitarán ayuda**
- **Qué puedo delegar con confianza** vs **qué debo supervisar closely**
- **Puntos donde puedo reutilizar código** entre los dos equipos
- **Technical debt** que podemos evitar desde el inicio
con respecto a todo esto, es al final de cada dia o dia de por medio, mandar un mensaje a cada integramte para `reguntarle como viene, sin presionar y tratando de ser invasivo, preguntando si necesita ayuda con algo.

## **📚 MIENTRAS TANTO - PREGUNTAS CLAVE**

Pensá en esto cuando prepares el resumen:

1. **¿El profesor mostró ejemplos de SPA o es un concepto nuevo?** hicimos un catalogo simple de zapatillas, con un modal que muestra el detalle de cada una, con datos conusltado de un json. si queres te lo paso
2. **¿Trabajaron con componentes reutilizables o todo desde cero?** lo mas similar a esto, fue adpatar los ejemplos de bootstrap
3. **¿El JavaScript fue básico (variables, funciones) o incluyó DOM manipulation avanzada?** No, vimos modulariacion, funciones y dom manipulation, no se el nivel de cada uno, pero diria que es un nivel intermendio
4. **¿Bootstrap lo vieron como "copiar y pegar" o entendieron el grid system?** Explicar por encima el grid system, pero mas que nada fue copiar y pegar / adaptarlo a los ejemplos que hicimos
5. **¿Hay algún proyecto anterior que podamos usar como referencia de su nivel?** si queres te lo paso


primero, te paso lo de la pagina indice del material del curso:

Primer Bloque: HTML y CSS
 Introducción a la Web y HTML Básico
Clase 1
Historia y evolución de la web.

Estructura básica de una página: DOCTYPE, etiquetas HTML principales (html, head, body).

Primeros ejemplos en el editor de código.

Ejercicio: Crear una página de bienvenida con título y párrafo.

Ver Clase
 Estructura HTML, Enlaces y Formularios
Clase 2
Estructura y anatomía de las etiquetas HTML.

Creación de enlaces internos y externos.

Formularios para la entrada de datos del usuario.

Uso de listas ordenadas y desordenadas.

Ver Clase
 Tablas e Imagenes
Clase 3
Creación de tablas para mostrar datos estructurados.

Inserción y optimización de imágenes en páginas web.

Ejercicio: Usar tablas para estructurar una página.

Ver Clase
 Inputs
Clase 4
Daremos un vistazo rapido por todos los inputs nativos de HTML

Ver Clase
 HTML Semantico y Principios basicos de CSS
Clase 5
Explicacion de HTML semantico y principales etiquetas semanticas

Introduccion a los principios basicos de CSS

Ver Clase
 Repaso de CSS
Clase 6
Repaso de CSS

Aplicamos y vimos como trabajar con diferentes Selectores

Realizamos una actividad practica

Ver Clase
Segundo Bloque: Bootstrap y JavaScript
 Introducción a JavaScript
Clase 1
Introduccion a JavaScript

Conocimiento basico del DOM.

Variables, constantes, funciones y algunas expresiones basicas.

Ver Clase
 Introducción a JavaScript Parte 2
Clase 2
Operadores aritmeticos, de asignacion y de comparacion.

Condicionales y bucles.

Arrays y objetos.

Ver Clase
 Introducción a Bootstrap
Clase 3
Introducción a los conceptos básicos de Bootstrap.

Estructura de un proyecto Bootstrap.

Uso de la cuadrícula (grid) y componentes básicos.

Ver Clase
 Introducción a Bootstrap Parte 2
Clase 4
Grid.

Modales.

Y muchas practicas.

Ver Clase
 Introducción a Fetch API
Clase 5
Fetch API.

Que es y como se Usa?

Practica con una API publica.

--- 

el ejemplo hecho en clase

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso Front-End - UPGL</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="icon" type="image/png" href="./assets/img/icon.png">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Curso Front-End UPGL</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#inicio">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#clases">Clases</a></li>
                    <li class="nav-item"><a class="nav-link" href="#proyectos">Proyectos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">Sobre mí</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <header id="inicio" class="hero-section bg-secondary text-white py-5">
        <div class="container pt-5 mt-5">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <img src="./assets/img/logoUPGL.png" alt="Logo UPGL" title="Logo UPGL" class="img-fluid" width="300">
                </div>
                <div class="col-lg-8">
                    <h1 class="display-4 fw-bold">Mi Journey en Front-End</h1>
                    <p class="lead">Bienvenido a mi repositorio de ejercicios y proyectos del curso de Front-End de la Universidad Popular General Levalle.</p>
                    <a href="#clases" class="btn btn-light btn-lg">Ver Clases</a>
                </div>
            </div>
        </div>
    </header>

    <section id="clases" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Clases del Curso</h2>
            <div class="row g-4" id="clases-container">
                <!-- Las tarjetas de clases se generarán con JavaScript -->
            </div>
        </div>
    </section>

    <section id="proyectos" class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-5">Proyectos Destacados</h2>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow">
                        <div class="card-body">
                            <h5 class="card-title">Calculadora JavaScript</h5>
                            <p class="card-text">Una calculadora funcional creada con HTML, CSS y JavaScript.</p>
                            <a href="clases/clase11-calculadora/" class="btn btn-primary">Ver Proyecto</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow">
                        <div class="card-body">
                            <h5 class="card-title">Desafío Pokémon</h5>
                            <p class="card-text">Emulacion de Pokedex con datos de Pokemones traidos de la API de Pokémon.</p>
                            <a href="clases/clase16-fetch/desafio_pokemon" class="btn btn-primary">Ver Proyecto</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow">
                        <div class="card-body">
                            <h5 class="card-title">Mi Blog Personal</h5>
                            <p class="card-text">Blog creado con HTML y CSS, aplicando conceptos de diseño responsive.</p>
                            <a href="proyecto-final/" class="btn btn-primary">Ver Proyecto</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <img src="https://avatars.githubusercontent.com/u/105461619?v=4" alt="Sobre mí" class="img-fluid rounded-circle" width="400">
                </div>
                <div class="col-lg-6">
                    <h2>Sobre Mí</h2>
                    <p>Soy <strong>Guillermo Cochrane</strong>, estudiante de desarrollo front-end en la Universidad Popular General Levalle. Este portfolio muestra mi progreso y aprendizaje a lo largo del curso.</p>
                    <p>Estoy aprendiendo HTML, CSS, JavaScript y Bootstrap para crear experiencias web atractivas y funcionales.</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-dark text-white py-4">
        <div class="container text-center">
            <p>Curso de Front-End - UPGL 2023</p>
            <p>
                <a href="https://github.com/GuillermoCochrane" class="text-white me-3">GitHub</a>
                <a href="#" class="text-white">LinkedIn</a>
            </p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>