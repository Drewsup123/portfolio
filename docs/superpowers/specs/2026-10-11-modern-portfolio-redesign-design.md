# Modern Portfolio Redesign Design

## Context

The existing portfolio is a Create React App site under `portfolio/`. It uses React 18, styled-components, Framer Motion, Material UI icons, Three.js/React Three Fiber, and static content in `src/data/constants.js`.

Baseline build status:

- `npm run build` succeeds.
- The build reports existing warnings from unused imports, comma operators in the lanyard component, a missing third-party source map, CRA maintenance warnings, and a large JavaScript bundle.
- Browser preview in this environment renders a blank page because WebGL context creation fails inside the Three.js canvas stack. This makes the portfolio inaccessible in browsers or environments where WebGL is unavailable.

## Goals

- Completely modernize the portfolio visual system.
- Feature Drew Johnson as a React-focused product engineer.
- Keep the site highly animated, but make animation progressive and non-blocking.
- Ensure core content renders without WebGL or GPU support.
- Make the site responsive, accessible, and previewable in automated/headless browser environments.
- Preserve useful existing portfolio content: professional experience, skills, projects, resume, GitHub, LinkedIn, and contact path.

## Non-goals

- Do not migrate frameworks from Create React App.
- Do not add backend services.
- Do not rely on new paid APIs or hosted CMS content.
- Do not make the contact form depend on successful EmailJS delivery for the site to be useful.

## Approaches Considered

### Approach 1: 3D-first immersive portfolio

Use React Three Fiber heavily for hero, background, project interactions, and skill visualization.

- Pros: visually impressive, memorable if WebGL works.
- Cons: current site already fails completely when WebGL is unavailable; performance and accessibility risks remain high.
- Decision: rejected for this pass.

### Approach 2: Minimal résumé landing page

Strip the site to mostly static sections with light CSS transitions.

- Pros: fast, reliable, simple to maintain.
- Cons: does not satisfy the request for a well-animated modern portfolio or demonstrate React UI craft strongly enough.
- Decision: rejected for being too conservative.

### Approach 3: Animated product-engineer command center

Build a polished one-page portfolio using CSS, Framer Motion, responsive layout, glass surfaces, animated gradients, marquee skill rails, scroll-reveal sections, project cards, experience metrics, and clear calls to action. Avoid WebGL for critical rendering.

- Pros: modern and animated while resilient; highlights React expertise through componentized interactive UI; easy to test and capture in screenshots/recordings.
- Cons: less 3D spectacle than the current ambition.
- Decision: selected.

## Selected Design

### Visual language

- Dark, high-contrast interface with layered radial gradients, subtle grid/noise texture, and glassmorphism cards.
- Accent colors use cyan, violet, blue, and warm highlights to feel technical and modern.
- Large editorial hero typography with a concise React developer positioning statement.
- Animated background elements are CSS-based and safe if animations are disabled.
- Cards and buttons use hover lift, border glow, and animated gradient accents.

### Information architecture

The page will use these sections:

1. **Navigation**: sticky translucent nav with anchor links and GitHub CTA.
2. **Hero**: Drew Johnson positioning, animated role chips, trust metrics, primary CTAs, and a visual "interface stack" panel.
3. **Proof strip**: short metrics such as years of React work, production apps, test/documentation/process strengths.
4. **Skills**: grouped skill cards focused on React ecosystems, data/UI engineering, backend/platform, and workflow.
5. **Experience**: modern timeline/cards showing roles, impact, and tech stack.
6. **Projects**: featured project cards with images, tags, descriptions, and live/code links.
7. **Process / value**: concise cards showing how Drew builds: component systems, data flows, testing, performance, collaboration.
8. **Contact CTA**: simple contact panel with email/social actions and optional form-style entry points.
9. **Footer**: concise navigation and links.

### Component architecture

Keep implementation inside the existing CRA structure and simplify the app:

- `src/App.js`: orchestrates the one-page layout and section order.
- `src/App.test.js`: verifies critical content renders without WebGL or canvas.
- `src/data/constants.js`: update portfolio copy and add focused arrays for metrics, process cards, and featured content.
- `src/index.css`: global reset, CSS variables, background texture, reduced-motion support, base typography, responsive helpers.

This pass may consolidate section markup in `App.js` to reduce churn across many existing template-derived components. Existing files can remain if unused, but imports from the old WebGL/canvas path should be removed from the main app so rendering no longer depends on GPU support.

### Data flow

- Static portfolio data stays in `constants.js`.
- `App.js` maps over arrays for roles, metrics, skill groups, experiences, projects, and process cards.
- Links are normal anchors for reliable behavior and easy testing.

### Animation strategy

- Use Framer Motion for entrance, stagger, hover, and scroll-reveal animation.
- Use CSS keyframes for ambient blobs, grid shimmer, and skill marquee effects.
- Respect `prefers-reduced-motion` by reducing or disabling non-essential animations.
- Do not use WebGL/Three.js in the critical render path.

### Error handling and resilience

- Core content must render even when WebGL is unavailable.
- External images should have alt text and cards should remain readable if images fail.
- Email/contact UX should provide direct links so the user can reach Drew even if a form provider fails.

### Testing

- Add React Testing Library coverage before implementation.
- Tests should verify:
  - The app renders Drew Johnson and the React developer positioning.
  - Primary sections and CTAs are present.
  - Featured projects and skill groups render from data.
  - The redesigned app does not require a canvas/WebGL element for critical content.
- Run `npm test -- --watchAll=false` and `npm run build`.
- Perform browser preview with screenshots and a screen recording after implementation.

## Acceptance Criteria

- The portfolio renders visibly in the browser preview environment.
- The main page is a complete modern redesign, not a minor styling tweak.
- The design clearly positions Drew as a React developer.
- Animations are visible in manual preview and do not block content.
- The site is responsive enough for desktop and mobile screenshots.
- Automated tests pass.
- Production build exits with code 0.
- Final summary includes screenshot and recording artifacts.
