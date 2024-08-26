# Encriptador de Texto

Este proyecto es un encriptador y desencriptador de texto desarrollado con HTML, CSS y JavaScript. Permite ingresar un texto en minúsculas y sin acentos para encriptarlo utilizando un patrón específico y también desencriptarlo siguiendo las mismas reglas.

## Características

- **Encriptado**: Transforma las vocales en patrones específicos (e.g., "e" se convierte en "enter", "i" en "imes", etc.).
- **Desencriptado**: Reversa el proceso de encriptado, devolviendo el texto a su forma original.
- **Copiado**: Opción para copiar el texto encriptado o desencriptado al portapapeles.
- **Validación**: Se valida que el texto ingresado esté en minúsculas y sin acentos antes de encriptar o desencriptar.
- **Modales**: Uso de modales para mostrar mensajes de éxito o error al usuario.

## Estructura del Proyecto

### HTML

El archivo principal es `index.html`, que contiene la estructura básica del proyecto:

- **Cabecera (`<header>`)**: Contiene el logo de la aplicación.
- **Cuerpo principal (`<main>`)**:
  - **Sección del Encriptador**: Un área donde el usuario puede ingresar texto y luego encriptarlo o desencriptarlo mediante botones.
  - **Sección de Resultado**: Muestra el texto encriptado o desencriptado, con una opción para copiarlo.
- **Pie de página (`<footer>`)**: Incluye derechos de autor y enlaces a redes sociales.
- **Modales**: Tres modales que informan al usuario sobre el estado de la operación (éxito en encriptado, desencriptado, o error).

### CSS

El archivo `styles.css` contiene estilos personalizados, incluyendo:

- **Variables CSS**: Definidas en `:root` para una fácil modificación de colores y fuentes en todo el proyecto.
- **Globales**: Estilos básicos aplicados a todos los elementos, como el reseteo de márgenes y padding, y la aplicación de fuentes.
- **Específicos de componentes**: 
  - **Encriptador**: Estilos para los elementos de texto, botones y avisos.
  - **Tarjeta**: Estilos para mostrar el resultado en un contenedor con un diseño específico.
  - **Modales**: Estilos que controlan la apariencia de los modales de éxito y error.
  - **Responsivo**: Se adaptan los estilos para pantallas más pequeñas usando media queries.

### JavaScript

El archivo `encriptador.js` gestiona la lógica de encriptado, desencriptado, validación y control de los modales:

- **Encriptar**: Toma el texto ingresado y lo convierte según las reglas de encriptación.
- **Desencriptar**: Revierte el texto encriptado a su forma original.
- **Validación**: Asegura que el texto esté en minúsculas y sin acentos antes de procesarlo.
- **Modales**: Controla la apertura y cierre de los modales según la acción del usuario.

## Instrucciones de Uso

1. Clona este repositorio.
   ```bash
   git clone https://github.com/tu-usuario/encriptador-de-texto.git
2. Abre el archivo index.html en tu navegador.

3. Ingresa el texto en el área correspondiente.

4. Presiona el botón "ENCRIPTAR!" para encriptar el texto.

5. Presiona el botón "DESENCRIPTAR!" para revertir el texto encriptado.

6. Utiliza el botón "Copiar" para copiar el resultado al portapapeles.

## Créditos
- Desarrollado por Krystel.
- Iconos de redes sociales y otros recursos visuales proporcionados por Alura.
