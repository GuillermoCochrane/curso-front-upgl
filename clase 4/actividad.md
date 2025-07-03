# Actividades Prácticas

---

## **Actividad 1**: Formulario de registro completo
## Objetivo: Crear un formulario de registro que utilice diferentes tipos de inputs y sus atributos.

Crear un archivo llamado formulario_registro.html

Construir un formulario que incluya:
### Información personal:
- Nombre completo (text, required)
- Email (email, required)
- Teléfono (tel)
- Fecha de nacimiento (date, required)

### Información de cuenta:
- Nombre de usuario (text, required, pattern para solo letras y números)
- Contraseña (password, required, minlength=8)
- Confirmar contraseña (password, required)

### Preferencias:
- Género (radio buttons)
- Intereses (checkboxes múltiples)
- País (input con datalist)
- Sitio web personal (url)

### Otros campos:
- Foto de perfil (file, accept imágenes)
- Color favorito (color)
- Nivel de experiencia (range, 1-10)
- Botones de enviar y limpiar formulario
- Usar atributos como placeholder, required, pattern según corresponda

### **Bonus**: 
- Añadir un campo oculto con la fecha actual usando JavaScript.

---

## **Actividad 2**: Sistema de encuestas
## Objetivo: Crear múltiples formularios que demuestren el dominio de todos los tipos de inputs.

### Descripción del proyecto:
Desarrollarás un sistema de encuestas con diferentes formularios especializados que cubran todos los tipos de inputs aprendidos.

Crear una carpeta llamada sistema-encuestas con estos archivos:
- index.html (página principal con enlaces)
- encuesta-personal.html (datos personales)
- encuesta-trabajo.html (información laboral)
- encuesta-satisfaccion.html (satisfacción del cliente)
  
### encuesta-personal.html:
- Información básica (nombre, email, teléfono, fecha nacimiento)
- Dirección completa (text inputs para calle, ciudad, código postal)
- Estado civil (radio buttons)
- Hobbies (checkboxes múltiples)
- Descripción personal (textarea)

### encuesta-trabajo.html:
- Empresa actual (text)
- Salario esperado (number con min/max)
- Años de experiencia (range slider)
- Fecha disponible para empezar (date)
- Horario preferido (time inputs para inicio y fin)
- CV (file upload, solo PDF)
- Sitio web profesional (url)
  
### encuesta-satisfaccion.html:
- Calificación general (range 1-10)
- Aspectos a evaluar (checkboxes)
- Recomendarías el servicio (radio sí/no)
- Comentarios (textarea)
- Email para seguimiento (email, opcional)
  
### Cada formulario debe tener:
- Validación HTML apropiada
- Placeholders informativos
- Labels asociados correctamente
- Botones de envío y reset

### Características avanzadas:

- Usar fieldset y legend para agrupar campos relacionados
- Implementar datalists para campos con sugerencias
- Añadir campos con validación custom usando pattern
- Usar autofocus en el primer campo de cada formulario

### **Bonus**:
- Crear un formulario adicional que demuestre inputs más avanzados como datetime-local, week, month, etc.