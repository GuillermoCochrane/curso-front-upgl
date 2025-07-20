# 🧠 Introducción general

CSS (Cascading Style Sheets) nos permite darle estilo a una página web: colores, tamaños, posicionamiento... y también animaciones, efectos visuales y diseño adaptable. Hoy vamos a aprender:

- ✨ Animaciones básicas en CSS
- 💎 Glassmorphism con backdrop-filter
- 📱 Diseño responsive para todos los dispositivos
- 🎨 UI moderna y pulida con transiciones y sombras

---

## 🔁 1. ANIMACIONES EN CSS

### 💬 ¿Qué es una animación en CSS?

Una animación es un cambio gradual y fluido de alguna propiedad del estilo: opacidad, tamaño, color, posición, etc. CSS lo logra con dos cosas:

- @keyframes: define los pasos de la animación.
- animation: aplica la animación a un elemento.

### 🫀 Pulse – Efecto "latido"
Este efecto simula un corazón que se agranda y achica suavemente.
(ver el archivo 1_latido_animado.html)

Explicación:

- transform: scale(1.1) agranda el div un 10%.
- opacity: 0.7 lo hace más transparente al latir.
- animation: pulse 1.5s infinite repite para siempre cada 1.5 segundos.

### 🌫 Fade In – Aparición suave

(ver 2_fadeinout.html)

Cuando querés que algo aparezca lentamente en pantalla.

Explicación:

- El elemento arranca invisible (opacity: 0).
- Al aplicar la animación, se vuelve visible (opacity: 1) en 2 segundos.
- forwards mantiene el estado final de la animación.


### 🪄 Scale al pasar el mouse

(ver 3_scale.html)

Ideal para botones, tarjetas o imágenes que quieras hacer más interactivas.

Explicación:
- transition suaviza el cambio de tamaño.
- En hover, el botón vuelve a su tamaño original.


### GLASSMORPHISM Y backdrop-filter 

(ver 4_glass.html)

**¿Qué es el Glassmorphism?**

Es un estilo moderno inspirado en vidrio esmerilado: transparencia + desenfoque. Se usa mucho en tarjetas, modales o fondos con imagen.

Explicación:
- backdrop-filter: blur(10px): desenfoca el fondo detrás del elemento.
- rgba(255,255,255,0.1): color blanco semitransparente.
- border-radius y padding: hacen que se vea elegante.

---

## 📱 2. DISEÑO RESPONSIVE 

(ver 5_responsive)

### 💬 ¿Qué es el diseño responsive?

Significa que la web se adapta automáticamente a cualquier pantalla: celular, tablet, monitor, etc. Se logra con:

- **@media queries**: reglas especiales que aplican solo en ciertos tamaños.
- Unidades flexibles como %, em o rem.

En una página web responsive, no todos los usuarios la ven desde el mismo dispositivo: algunos usan un celular, otros una tablet, otros una notebook o una pantalla gigante. Para que el diseño se adapte a cada caso, usamos lo que se llama una media query, que permite aplicar estilos solo cuando se cumple una condición específica, como el tamaño de la pantalla.

En el ejemplo:
/* Celulares */

@media (max-width: 600px) {
  .responsive-box {
    background: orange;
    font-size: 1rem;
  }
}

Esto le está diciendo al navegador:
"Si la pantalla mide 600 píxeles de ancho o menos (o sea, un celular), entonces cambiá el fondo a naranja y hacé el texto más chico".

Y este otro:

/* Tablets */
@media (min-width: 601px) and (max-width: 1024px) {
  .responsive-box {
    background: royalblue;
  }
}

Dice:
"Si la pantalla está entre 601 y 1024 píxeles de ancho (una tablet horizontal, por ejemplo), entonces poné el fondo azul."

**¿Por qué cambiar el fondo o el tamaño del texto?**

Porque lo que se ve bien en una pantalla grande, puede ser incómodo o exagerado en una pantalla chica. Por ejemplo:
Un texto muy grande en celular puede romper el diseño.
Un fondo oscuro puede no verse bien si ocupa toda la pantalla de un teléfono.
Por eso, ajustar tamaño, color, márgenes o distribución según el tamaño de pantalla permite que tu web sea legible, estética y cómoda en cualquier dispositivo.

--- 

### 3. 🎨 UI MODERNA CON SOMBRAS Y TRANSICIONES 

(ver 6_uimoderna.html)

Explicación:
- linear-gradient: crea un degradado de colores.
- box-shadow: sombra externa para dar profundidad.
- transform: scale(1.05): agranda levemente al pasar el mouse.

---

### 4. Bonus:

🌐 Top webs para ver y copiar efectos CSS
Para seguir viendo si te gustaron los efectos CSS

1. ### 🔹  Animista

🔥 Ideal para: animaciones CSS listas para copiar (fade, bounce, scale, rotate, etc.)

Sitio 100% visual: elegís el efecto, lo ves en vivo y copiás el código.
Podés ajustar duración, delay, repetición, easing, etc.
¡Perfecto para alumnos que recién empiezan!

➡️ https://animista.net

2. ### 🔹  Hover.css

💡 Ideal para: efectos en botones y elementos al pasar el mouse (hover)
Más de 50 efectos de hover: grow, float, pulse, bounce, etc.
Solo tenés que agregar la clase al botón.
También está disponible como CDN o paquete npm.

➡️ https://ianlunn.github.io/Hover/


3. ### 🔹  CodePen

🚀 Ideal para: ver ejemplos, modificarlos y aprender jugando
Podés editar en vivo el CSS y ver cómo cambia.

➡️ https://codepen.io

4. ### 🔹  CSS Tricks

📘 Ideal para: entender cómo funcionan las propiedades CSS
No es un sitio de efectos visuales directamente, pero te explica cada propiedad con ejemplos.
Ideal para usarlo como referencia o para profundizar el concepto detrás del efecto.

➡️ https://css-tricks.com

5. ### 🔹  UIVerse
🪄 Ideal para: UI moderna, tarjetas, botones, inputs con animaciones
Todos los efectos son copiables con un solo clic, con HTML y CSS listos.
Usan puro CSS o animaciones simples con JS.
Visual y rápido para aprender diseño de interfaces.
➡️ https://uiverse.io

---

### 5.🚀 Proyecto  para practicar

 - Creá una tarjeta con efecto glassmorphism que aparezca con fade-in, tenga un botón con efecto scale y se adapte a celular.
