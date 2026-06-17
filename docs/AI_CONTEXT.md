# Contexto: Desarrollo de la Landing Page de Costa del Code

## 1. Visión y Objetivo del Proyecto

**Costa del Code** es una iniciativa diseñada para impulsar, conectar y estructurar la comunidad local de devs de software en Estepona y la Costa del Sol. El objetivo es crear una landing page atractiva, moderna y minimalista que sirva como punto de anclaje para atraer talento técnico, fomentar la colaboración y centralizar las iniciativas de la comunidad.

---

## 2. Propuesta de Valor y Ventajas Clave

Para la landing page, los beneficios de unirse a la comunidad se estructurarán de forma directa, visual y digerible mediante conceptos clave:

- **Networking:** Conexión presencial y directa con devs y profesionales del sector tecnológico en la Costa del Sol.
- **Colaboración:** Desarrollo de proyectos open-source comunitarios donde aprender de otros y demostrar habilidades reales.
- **Actualidad:** Quedadas presenciales y charlas enfocadas en las últimas tendencias de Inteligencia Artificial, código y metodologías.
- **Sintonía:** Un espacio de confianza para hablar de tus proyectos técnicos con oyentes que "hablan tu mismo idioma".
- **Descubrimiento:** Intercambio práctico de tecnologías, configuraciones de entorno, trucos de IDEs y flujos de trabajo eficientes.
- **Retroalimentación:** Validación de ideas propias y co-creación inspirada en las propuestas de los demás miembros.
- **Oportunidades:** Posibilidad de conocer ofertas de empleo, proyectos freelance y recomendaciones laborales.
- **Clientes:** Canal de captación de potenciales clientes locales que buscan soluciones tecnológicas y desarrollo a medida.
- **Recursos:** Acceso exclusivo a una biblioteca comunitaria con herramientas frontend, patrones de diseño y utilidades web.
- **Diversión:** Exposición de nuestros "setups" de trabajo con una dosis de humor, creando lazos a través de anécdotas y críticas cómicas de nuestros escritorios.

---

## 3. Stack y Restricciones Técnicas

- **Framework:** Astro (Generación de sitio estático rápido y óptimo).
- **Estilos:** Tailwind CSS v4.
  - _Restricción:_ No crear archivo `tailwind.config.*`. Toda la personalización, variables de color y temas deben definirse en `src/styles/global.css` mediante la directiva `@theme`.
- **Gestor de Paquetes:** Yarn v1.
- **Hosting:** GitHub Pages.

---

## 4. Directrices de Desarrollo para la IA

- **Tono de voz:** Cercano, profesional, amigable, tecnológico y muy enfocado a lo local (comunidad de proximidad). La sección de Setups debe mantener un tono sarcástico pero siempre respetuoso y divertido.Incorporar humor y referencias a la cultura dev sin caer en clichés o estereotipos ofensivos.
- **Diseño Visual:** Estética limpia, uso generoso del espacio en blanco (whitespace), tipografías sans-serif modernas, esquinas redondeadas suaves y contrastes marcados para facilitar la lectura.
- **Optimización:** Código semántico, carga ultra-rápida (aprovechando las capacidades nativas de Astro) y adaptabilidad móvil impecable (Mobile-First).

---

## 5. Diseño y Arquitectura Web (Multi-página)

Dado el volumen de información y los diferentes objetivos de la comunidad, la web adopta una arquitectura de múltiples páginas para evitar la fatiga visual, mejorar el posicionamiento local y mantener el contenido bien clasificado.

### 5.1. Mapa del Sitio (Sitemap)

- **Inicio (Home):**
  - **Hero Section:** Mensaje de impacto (Costa del Code), eslogan local y CTA principal (WhatsApp).
  - **Pilares de la Comunidad:** Cuadrícula con 6 tarjetas visuales: Networking, Colaboración, Actualidad, Feedback, Oportunidades y Recursos.
  - **Evento Destacado:** Tarjeta con el próximo evento y CTA de asistencia.
  - **JoinCta:** Sección de cierre con accesos a WhatsApp, Telegram e Instagram. Presente al final de todas las páginas.
- **Comunidad (`/comunidad/`):**
  - **Hero:** Presentación de la historia y origen de la comunidad.
  - **Sección Fundador:** Mosaic/grid visual que presenta a Daniel Núñez y el espíritu fundacional de Costa del Code.
  - **Pilares de la Comunidad:** Los 10 pilares completos: Conexiones, Colaboración, Actualidad, Sintonía, Descubrimiento, Retroalimentación, Oportunidades, Clientes, Recursos y Diversión.
  - **Setups de la Comunidad (Roast my Setup):** Tarjetas con fotos reales de escritorios de miembros (foto + nombre + rol + crítica cómica). Sección pública como gancho de humor y pertenencia.
- **Recursos (`/recursos/`):**
  - **Directorio de Herramientas:** Tarjetas agrupadas en tres categorías estáticas sin filtros complejos:
    - _Herramientas Frontend_
    - _Patrones de Diseño_
    - _Tech Stack Local_ (tecnologías que usan los miembros de la comunidad)
  - **Aporte Comunitario:** CTA para proponer nuevas herramientas al repositorio abierto.
- **Eventos (`/eventos/`):**
  - **Agenda:** Listado de próximas quedadas con temáticas, fecha, hora y ubicación.
  - **Speakers:** CTA para proponer una charla, con contacto directo por email.
- **Preguntas (`/faq/`):**
  - **FAQ:** 5 preguntas frecuentes que resuelven las objeciones más comunes: coste, nivel técnico necesario, ubicación de las quedadas, cómo proponer temas y si pueden participar personas que no son desarrolladores.
  - **Contacto:** Accesos directos a WhatsApp, Telegram, Instagram y email.

### 5.2. Directrices de UI/UX

- **Navegación Global:** Barra de navegación superior estática (sticky header) con cinco enlaces: Inicio, Comunidad, Recursos, Eventos y Preguntas. El CTA de acceso a WhatsApp siempre visible en la esquina superior derecha.
- **Estética y Tema (Color Scheme):** Diseño con estética limpia, uso generoso del espacio en blanco (whitespace) y esquinas redondeadas suaves. Para acelerar el desarrollo y salir a producción cuanto antes, **la web utilizará exclusivamente un Tema Claro (Light Mode)** en su primera versión.
- **Tono Visual:** El diseño apoyará un tono cercano, profesional y enfocado a lo local. Específicamente, los componentes de la sección de Setups deben reflejar un tono sarcástico pero siempre respetuoso y divertido.
- **Rendimiento y Responsividad:** Al ser multipágina, la transición entre rutas debe sentirse instantánea (aprovechando Astro) y la estructura de cuadrículas y tarjetas debe adaptarse de forma impecable a dispositivos móviles (Mobile-First).
