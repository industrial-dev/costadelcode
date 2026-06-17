## Product intent

Costa del Code is a static landing page for a local developer community in Costa del Sol.

The page should feel:

- local, human, and community-first
- technical without becoming cold or corporate
- polished, calm, and editorial rather than startup-generic
- welcoming to remote developers, digital nomads, and other tech profiles in the area

The primary goal is to turn curious visitors into community members through the join CTA.

## Audience

- Developers from Estepona or nearby towns
- Remote workers employed by companies outside the area
- Digital nomads temporarily based on the Costa del Sol
- Tech-adjacent people who want in-person local community

The copy should assume the audience understands developer culture, jokes, and terminology.

## Brand personality

The brand voice mixes:

- technical fluency
- warm local pride
- playful developer humor
- low-ego community building

Avoid sounding like:

- a corporate tech conference
- a SaaS landing page
- a tourism campaign
- an exclusive senior-only club

## Visual direction

Use the current visual language as the baseline.

- Background: warm cream paper-like surface, not pure white
- Foreground: near-black ink, softened body copy, subtle borders
- Accent: restrained warm yellow, used sparingly for selection and ambient glow
- Mood: analog warmth + digital craft

The page should feel more like a well-designed editorial poster for developers than a conventional marketing page.

## Color system

Canonical theme tokens live in `src/styles/global.css`.

- `--color-cream-50`, `--color-cream-100`, `--color-cream-200`
- `--color-ink-950`, `--color-ink-800`
- `--color-stone-500`, `--color-stone-300`
- `--color-accent-500`, `--color-accent-600`

Supporting surface tokens:

- `--page-background`
- `--border-soft`
- `--shadow-soft`
- `--shadow-card`
- `--noise-lines`

Rules:

- keep contrast high for headings and actions
- prefer translucent white panels over solid blocks
- use borders and shadow softly; never heavy or glossy
- use accent yellow as a highlight, not as the main button color

## Typography

Typography is part of the brand and should stay intentionally mixed.

- Sans body: `Manrope`
- Display: `Chakra Petch`
- Monospace accent: `VT323`

Usage rules:

- Display font for major headings, section titles, and labels with personality
- Sans for paragraphs and readable UI copy
- Mono only for code snippets, brand-tech flavor, and small moments of contrast
- Maintain tight tracking and strong hierarchy in headings

Do not replace this with generic system typography unless there is a strong reason.

## Layout principles

The current site uses a single long-form landing page with anchored sections.

Core layout behavior:

- wide centered shell for major sections
- narrower shell for focused CTA content
- generous vertical rhythm
- sticky header with subtle condensed state on scroll
- responsive stacking before desktop multi-column layouts

Sections should breathe. Avoid dense dashboards, crowded cards, or visually noisy grids.

## Core page structure

Keep the information architecture simple and linear:

1. Hero
2. Community definition
3. Meetup formats
4. Join CTA
5. Minimal footer

The current implementation also surfaces the community purpose inside the hero via an aside card.

## Component patterns

### Header

- Sticky
- Transparent-warm blurred background
- Compact navigation on desktop
- Primary join CTA always visible

### Hero

- Strong editorial headline
- Short code-flavored line above the title
- Personal founder-style intro paragraph
- Multi-paragraph narrative below
- Two CTAs: join first, explanation second
- Supporting aside card with community objective

### Cards

- Rounded, soft, semi-translucent surfaces
- Light borders and soft shadows
- No hard gradients or aggressive elevation
- Content-first, not icon-first

### Community and meetup sections

- Lead with eyebrow + heading + intro
- Follow with small sets of readable cards
- Staggering is acceptable when subtle

### CTA section

- Centered
- Clear final invitation
- Code-themed accent line above the headline
- Two action links maximum

## Motion and interaction

Motion should be subtle and supportive.

- Use fade-and-rise reveal behavior similar to the current `fade-rise` keyframe
- Use short, soft transitions
- Header condensation on scroll should feel almost invisible
- Hover states should be crisp but restrained

Avoid:

- parallax-heavy effects
- flashy gradients
- springy toy-like interactions
- excessive animation chains

## Copy guidelines

The copy is a major part of the product identity.

- Write in clear Spanish by default
- Keep developer humor natural and sparse
- Mix emotional community language with technical references
- Prioritize authenticity over conversion cliches
- Sound like a real local developer inviting peers, not a brand team

Do not remove the local framing around la Costa del Sol.

## Internationalization

Current product truth:

- Spanish is the real content locale
- English exists in routing and metadata, but currently redirects to Spanish

Rules:

- do not invent full English content unless explicitly requested
- preserve locale alternates and canonical behavior
- if English content is added later, it should mirror the Spanish structure and tone rather than rewrite the product identity

## SEO and metadata

The shared layout already establishes a consistent metadata baseline.

- set title and description per locale content source
- preserve canonical and alternate links
- keep Open Graph metadata aligned with page intent
- redirect pages should remain `noindex,follow`

## Implementation constraints

- Framework: Astro
- Styling: Tailwind CSS v4 via `@tailwindcss/vite`
- Theme tokens belong in `src/styles/global.css` under `@theme`
- There is no `tailwind.config.*`; do not introduce one
- Prefer static-first pages with very light client-side behavior

## When extending the site

New sections or pages should:

- feel consistent with the warm editorial developer aesthetic
- reuse the same token system and typography roles
- keep copy concise, human, and community-oriented
- support mobile-first reading comfortably
- avoid introducing visual styles that feel corporate, neon-cyberpunk, or template-generated

If a design choice is unclear, prefer the quieter, warmer, more editorial option.
