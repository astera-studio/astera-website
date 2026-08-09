# Astera Studio

Institutional website for ASTERA, an independent creative studio.

Originally developed through Figma Make and exported to GitHub. The project is now being incrementally refactored into a professional, maintainable, and scalable codebase.

## Stack

- React 19
- TypeScript 5.7
- Vite 8
- Tailwind CSS 4
- npm
- Git

## Current Phase

Phase 3 — Astera visual identity refinement — completed for the homepage section cycle.

Phases 1 and 2 are complete.

The next priority is Phase 4: transversal visual polish, accessibility, performance, asset review, SEO basics, and production readiness.

Do not restart section-by-section redesign or perform architectural refactors unless explicitly requested.

## Project Structure

Start with task-relevant files only.

Follow imports or inspect additional files only when required to complete the task, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` — React entrypoint.
- `src/App.tsx` — Application composition only.
- `src/index.css` — Global CSS, Tailwind CSS v4 integration, fonts, and global theme wiring.
- `src/components/layout` — Layout-level components.
- `src/components/sections` — Page sections such as Hero, About, Services, Process, Portfolio, Values, CTA, and Footer.
- `src/components/ui` — Shared reusable UI components.
- `src/components/graphics` — Visual and graphical components.
- `src/theme` — Shared design tokens.
- `src/types` — Shared TypeScript types.
- `src/assets/brand` — Official ASTERA brand assets.
- `src/assets/fonts` — Local ASTERA fonts.
- `src/assets/projects` — Temporary conceptual artwork used by Selected Work.
- `src/constants` — Shared stable destinations such as the project-start form.
- `vite.config.ts` — Vite configuration.
- `package.json` — Dependencies and project scripts.

`App.tsx` must remain composition-only.

Do not move section logic, data, state, or component implementations back into `App.tsx`.

## Architecture Rules

- Preserve the current component architecture.
- Do not rewrite the project.
- Refactor incrementally.
- Make the smallest viable change required by the task.
- Do not modify unrelated code.
- Do not move or rename files unless explicitly requested or technically necessary.
- Prefer existing components, tokens, types, and patterns before creating new ones.
- Create abstractions only when there is demonstrated reuse.
- Keep expressive and section-specific visual elements local when appropriate.
- Preserve separation between layout, sections, UI, graphics, theme, types, and assets.
- Do not introduce new dependencies unless explicitly requested or clearly necessary.

## Design System

The Design System evolves incrementally from real usage patterns.

Before creating a new token or shared abstraction:

1. Check whether an existing token or component already solves the problem.
2. Prefer local implementation for one-off visual decisions.
3. Promote patterns to shared abstractions only when reuse is demonstrated.

Existing semantic foundations include:

- colors
- typography
- spacing
- motion

Do not create speculative tokens or abstractions.

## Visual Direction

ASTERA's current visual direction is:

**Editorial retrofuturism with technical precision.**

Core principles:

- predominantly black canvas;
- generous negative space;
- controlled typographic impact;
- editorial composition;
- thin technical lines;
- subtle astronomical and orbital references;
- restrained motion;
- subtle atmospheric effects;
- minimal conventional shadows;
- decorative elements must support the composition;
- futuristic effects must not compete with content.

The Hero is the primary visual reference for the rest of the website.

Use its principles to maintain cohesion, but do not reproduce the Hero composition across other sections.

## Brand Colors

Official palette:

- Black / Canvas — `#090909`
- Off White / Primary text — `#F4F1EA`
- Burnt Orange / Primary accent — `#E86A33`
- Turquoise / Technical accent — `#467978`
- Deep Turquoise — `#224B5A`
- Pink — `#B01942`
- Graphite — `#222222`
- Light Gray — `#D8D8D8`

Guidelines:

- Off White replaces pure white as the primary light text color.
- Burnt Orange is an accent, not a dominant color.
- Turquoise is primarily technical, secondary, or interactive.
- Secondary colors should be introduced intentionally and with restraint.
- Do not introduce new brand colors unless explicitly requested.

## Typography

Primary typography roles:

- `ASTERAV1` — proprietary brand/display typeface.
- `DM Sans` — primary functional interface and body typeface.
- `Playfair Display` — editorial support typeface.

ASTERAV1 should be used sparingly as a brand or display element.

DM Sans should remain the functional foundation of the interface.

Playfair Display should be used only when an editorial contrast is intentional.

For small technical text such as:

- eyebrows;
- navigation;
- metadata;
- ticker;
- labels;

prioritize legibility.

Avoid combining very small font sizes, excessive tracking, low opacity, and light font weight.

Use approximately `font-weight: 500` when appropriate for small interface text.

## Styling

The project uses Tailwind CSS v4 through `@tailwindcss/vite`.

`src/index.css` is the global CSS entrypoint and contains Tailwind integration and global theme/font wiring.

Do not:

- create a Tailwind config file unless explicitly required;
- mass-convert existing styling to Tailwind;
- replace working local styles solely for consistency;
- introduce styling abstractions without demonstrated benefit.

Preserve the incremental styling strategy already used by the project.

## Hero and Orbital Diagram

The Hero currently establishes the visual benchmark for the website.

When working outside the Hero, preserve its visual principles without copying its exact layout.

The `OrbitalDiagram` is an important ASTERA graphical element.

Unless explicitly requested:

- preserve its current animation;
- preserve its behavior;
- do not redesign it;
- do not alter its mobile flow.

Positioning adjustments may be made only when required by the requested task.

## Responsive Behavior

Preserve existing responsive behavior unless the task explicitly changes it.

When implementing visual changes:

- consider desktop, tablet, and mobile;
- avoid horizontal overflow;
- preserve natural document flow on mobile;
- do not apply desktop-specific positional offsets to mobile without an explicit reason.

Prefer responsive solutions over viewport-specific hacks.

## Accessibility and Legibility

Visual identity must not compromise usability.

Pay particular attention to:

- text contrast;
- small text sizes;
- font weight;
- tracking;
- interactive states;
- responsive readability.

Avoid reducing opacity to the point where secondary text becomes difficult to read.

## Development Server

The Vite development server can be started with:

`npm run dev`

The project is configured to use port `8443`.

Do not start the development server unless runtime or visual validation is necessary for the task.

## Validation

For normal implementation tasks, run:

1. `npx tsc --noEmit`
2. `npm run build`
3. `git diff --check`

Run additional validation only when relevant to the task.

When visual or runtime behavior changes, mention what still requires manual visual review.

Do not commit changes unless explicitly requested.

## Working Behavior

For each task:

1. Read this file first.
2. Inspect only the files relevant to the requested change.
3. Follow imports only when necessary.
4. Preserve unrelated code.
5. Implement the smallest viable solution.
6. Validate the result.
7. Report which files were changed.
8. Report validation results.
9. Mention anything that still requires manual visual review.

Do not perform broad repository exploration unless the task genuinely requires it.

Do not read large project documentation files by default. Consult additional documentation only when the task requires information not available here or in the user's instructions.

When the user's task-specific instructions conflict with assumptions in this file, follow the user's explicit task requirements while preserving project safety and architecture.
