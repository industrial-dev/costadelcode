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

## 3. Estructura Sugerida para la Landing Page

Para mantener la web ligera, amigable y muy enfocada a la conversión (unirse a los canales), se propone la siguiente arquitectura de bloques:

### A. Hero Section (Primer Impacto)

- **Objetivo:** Captar la atención en menos de 3 segundos con un mensaje local potente.
- **Contenido:**
  - _Nombre:_ Costa del Code
  - _Slogan:_ La comunidad de devs en Estepona.
  - _Copy corto:_ El punto de encuentro para el talento tech de la Costa del Sol. Conectamos, programamos y crecemos juntos.
  - _CTA Principal:_ Botones gemelos destacados: "Unirse a WhatsApp" / "Unirse a Telegram". Por otro lado, también incluir un enlace a Instagram.

### B. About / El Propósito (El "Por Qué")

- **Objetivo:** Explicar de manera concisa la razón de ser de la comunidad.
- **Contenido:** Tres tarjetas o un párrafo limpio que resuma el deseo de descentralizar la tecnología y crear un núcleo fuerte de desarrollo local fuera de las grandes capitales, aprovechando el entorno de Estepona.

### C. Pilares de la Comunidad (Sección de Beneficios)

- **Objetivo:** Mostrar los puntos fuertes mediante un diseño de cuadrícula (Grid) interactivo o iconos limpios utilizando los conceptos clave descritos en la sección 2 (_Networking, Colaboración, Actualidad, Oportunidades, etc._).
- **Estilo:** Tarjetas con tipografía grande para la palabra clave y una sola frase descriptiva para evitar la fatiga de lectura.

### D. El Toolkit de la Comunidad (Sección de Contenidos)

- **Objetivo:** Aportar valor inmediato al visitante y demostrar utilidad desde el primer momento.
- **Contenido:** Un escaparate visual de la librería de contenidos. Un bloque dividido en categorías rápidas:
  - _Herramientas Frontend_ (Enlaces rápidos y utilidades de diseño/desarrollo).
  - _Patrones de Diseño_ (Buenas prácticas de arquitectura).
  - _Tech Stack Local_ (Las tecnologías que más usan los miembros actuales).
- **Nota de diseño:** Un anticipo interactivo que invite a unirse para acceder o colaborar en la lista completa.

### E. Setups de la Comunidad (Roast my Setup)

- **Objetivo:** Fomentar el humor, la cercanía y el sentido de pertenencia mostrando el lado más humano y "friki" de la comunidad.
- **Contenido:** Una galería tipo carrusel o tarjetas con fotos reales de los escritorios de los miembros.
  - _Formato:_ Foto del setup + Nombre del dev + "Crítica cómica" (Ej: _Mucho monitor curvo de 49 pulgadas, pero sigue centrando divs a ojo_ o _Esa silla gaming grita 'dolor lumbar' a los 30_).

### F. Próximos Eventos y Charlas (Actividades)

- **Objetivo:** Mostrar dinamismo y animar a la asistencia física.
- **Contenido:** Marcador de posición para la siguiente quedada (Tema: _IA aplicada al código / Debates sobre IDEs y setups_). Espacio para llamadas a la acción tipo "Quiero dar una charla".

### G. FAQ (Preguntas Frecuentes)

- **Objetivo:** Resolver objeciones de forma rápida.
- **Preguntas propuestas:**
  - ¿Tiene algún coste participar? (No, es 100% abierto y gratuito).
  - ¿Qué nivel técnico necesito para unirme? (Desde juniors y entusiastas hasta seniors, todos aportan).
  - ¿Dónde se realizan las quedadas? (Preferentemente en espacios locales de Estepona).

### H. Footer & CTA de Cierre

- **Objetivo:** Última oportunidad de conversión.
- **Contenido:** Replicación de accesos a WhatsApp/Telegram/Instagram, créditos del proyecto estático, año y enlace al repositorio de GitHub (Open Source).

---

## 4. Stack y Restricciones Técnicas (Mantener en sincronía)

- **Framework:** Astro (Generación de sitio estático rápido y óptimo).
- **Estilos:** Tailwind CSS v4.
  - _Restricción:_ No crear archivo `tailwind.config.*`. Toda la personalización, variables de color y temas deben definirse en `src/styles/global.css` mediante la directiva `@theme`.
- **Gestor de Paquetes:** Yarn v1.
- **Hosting:** GitHub Pages.

---

## 5. Directrices de Desarrollo para la IA

- **Tono de voz:** Cercano, profesional, amigable, tecnológico y muy enfocado a lo local (comunidad de proximidad). La sección de Setups debe mantener un tono sarcástico pero siempre respetuoso y divertido.Incorporar humor y referencias a la cultura dev sin caer en clichés o estereotipos ofensivos.
- **Diseño Visual:** Estética limpia, uso generoso del espacio en blanco (whitespace), tipografías sans-serif modernas, esquinas redondeadas suaves y contrastes marcados para facilitar la lectura.
- **Optimización:** Código semántico, carga ultra-rápida (aprovechando las capacidades nativas de Astro) y adaptabilidad móvil impecable (Mobile-First).

---

## 6. Diseño y Arquitectura Web (Multi-página)

Dado el volumen de información y los diferentes objetivos de la comunidad, la web adopta una arquitectura de múltiples páginas para evitar la fatiga visual, mejorar el posicionamiento local y mantener el contenido bien clasificado.

### 6.1. Mapa del Sitio (Sitemap)

- **Inicio (Home):**
  - **Hero Section:** Mensaje de impacto (Costa del Code), eslogan local y CTA principal doble (WhatsApp y Telegram).
  - **Resumen de Pilares:** Tarjetas visuales con los conceptos clave como Networking, Colaboración y Oportunidades.
  - **Próximo Evento (Destacado):** Widget o tarjeta con la fecha de la próxima quedada y un CTA secundario.
- **Comunidad (Nosotros):**
  - **El Propósito:** Explicación de la misión de descentralizar la tecnología y fortalecer el desarrollo local fuera de las grandes capitales.
  - **Setups de la Comunidad (Roast my Setup):** Galería tipo carrusel completamente pública. Mostrará fotos reales de los escritorios de los miembros con su nombre y una crítica cómica. Funcionará como un gancho abierto y divertido para romper el hielo y atraer a la gente con humor.
- **Recursos (Toolkit):**
  - **Directorio de Herramientas:** Interfaz visual y sencilla basada en tarjetas (cards) que mostrarán principalmente el logo de la tecnología o herramienta y una breve descripción. Se dividirá en bloques estáticos (Frontend, Patrones de Diseño, Tech Stack Local) sin utilizar filtros o etiquetas complejas.
  - **Aporte Comunitario:** Un anticipo interactivo o botón que invite a unirse a los canales para proponer o acceder a nuevas herramientas de la lista.
- **Eventos y Charlas:**
  - **Agenda:** Marcador de posición para la siguiente quedada, con temáticas como IA aplicada al código o debates sobre IDEs y setups.
  - **Llamada a la Acción (Speakers):** Espacio reservado para llamadas a la acción tipo "Quiero dar una charla".
- **FAQ y Contacto:**
  - **Resolución de dudas:** Sección dedicada a resolver objeciones de forma rápida. Incluirá preguntas sobre si tiene algún coste participar, el nivel técnico necesario para unirse y dónde se realizan las quedadas.

### 6.2. Directrices de UI/UX

- **Navegación Global:** Barra de navegación superior estática (sticky header) con enlaces claros a cada página y el CTA de acceso a la comunidad siempre visible en la esquina superior derecha.
- **Estética y Tema (Color Scheme):** Diseño con estética limpia, uso generoso del espacio en blanco (whitespace) y esquinas redondeadas suaves. Para acelerar el desarrollo y salir a producción cuanto antes, **la web utilizará exclusivamente un Tema Claro (Light Mode)** en su primera versión.
- **Tono Visual:** El diseño apoyará un tono cercano, profesional y enfocado a lo local. Específicamente, los componentes de la sección de Setups deben reflejar un tono sarcástico pero siempre respetuoso y divertido.
- **Rendimiento y Responsividad:** Al ser multipágina, la transición entre rutas debe sentirse instantánea (aprovechando Astro) y la estructura de cuadrículas y tarjetas debe adaptarse de forma impecable a dispositivos móviles (Mobile-First).
