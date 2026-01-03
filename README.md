# ARQUITECNO S.A. DE C.V. – Portafolio Web Profesional

Portafolio web corporativo desarrollado como sitio estático para la presentación de proyectos, servicios y contacto de *Arquitecno S.A. de C.V.*, enfocado en arquitectura, diseño y gerenciamiento de proyectos.

---

## Objetivo del proyecto

Desarrollar un portafolio web profesional que permita:
- Presentar proyectos de manera visual y ordenada.
- Mostrar información corporativa clara.
- Integrar video de presentación.
- Contar con un formulario de contacto funcional.
- Publicar el sitio en un entorno de hosting web estático.

---

## Tecnologías utilizadas

- *HTML5* – Estructura del sitio.
- *CSS3* – Diseño visual, layout y responsive.
- *JavaScript (Vanilla)* – Interactividad, modal de proyectos y navegación.
- *Google Fonts* – Tipografías Montserrat y Playfair Display.
- *Visual Studio Code* – Entorno de desarrollo.
- *Live Server Extension* – Servidor local para pruebas en tiempo real.

---

## Estructura del proyecto

```text
Mi Portafolio/
│
├── index.html          # Página principal
├── projects.html       # Portafolio de proyectos
├── contact.html        # Página de contacto
├── styles.css          # Estilos generales
├── script.js           # Lógica e interactividad
├── README.md           # Documentación del proyecto
│
├── assets/
│   ├── brand/
│   │   └── Membrete.png
│   ├── img/
│   │   ├── Logo.png
│   │   ├── Perfil.jpeg
│   │   ├── Project01.jpg
│   │   ├── Project02.jpg
│   │   ├── Project03.jpg
│   │   ├── Project04.jpg
│   │   ├── Project05.jpg
│   │   ├── Project06.jpg
│   │   ├── Project07.jpg
│   │   └── Project08.jpg
│   └── video/
│       └── Arquitecno.mp4

## Funcionalidades

-Navegación entre páginas (Inicio, Proyectos y Contacto).
-Galería de proyectos con tarjetas visuales.
-Modal interactivo para mostrar descripción ampliada de cada proyecto.
-Reproducción de video de presentación.
-Footer con año dinámico.
-Menú móvil tipo hamburguesa.

## Ejecución del proyecto (local)

-Abrir la carpeta del proyecto en Visual Studio Code.
-Instalar la extensión Live Server.
-Dar clic derecho sobre index.html.
-Seleccionar Open with Live Server.
-Visualizar el sitio en el navegador.

## Publicación en la nube  ( Azure Blob Storage)

El portafolio web fue publicado como sitio web estático utilizando *Microsoft Azure Blob Storage*.

*URL pública:*
https://arquitecno2026.z19.web.core.windows.net/

El despliegue se realizó activando la opción Static Website dentro de un Storage Account y cargando manualmente los archivos del proyecto en el contenedor $web.

