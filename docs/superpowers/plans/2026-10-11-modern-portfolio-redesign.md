# Modern Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fully redesigned, animated, resilient portfolio that presents Drew Johnson as a React-focused product engineer.

**Architecture:** Keep the CRA app but replace the WebGL-dependent main render path with data-driven React sections, Framer Motion interactions, and CSS animation. Portfolio content lives in `src/data/constants.js`; `src/App.js` renders the one-page experience; `src/index.css` defines global tokens and animation primitives.

**Tech Stack:** React 18, Create React App, styled-components, Framer Motion, React Testing Library, existing static assets.

## Global Constraints

- Do not migrate away from Create React App.
- Do not add backend services or paid API dependencies.
- Core content must render without WebGL, canvas, or GPU support.
- Animations must be progressive and honor `prefers-reduced-motion`.
- Preserve useful existing links: resume, GitHub, LinkedIn, project URLs.
- Use test-first implementation before production code changes.

---

### Task 1: Add redesign render tests

**Files:**
- Create: `portfolio/src/App.test.js`

**Interfaces:**
- Consumes: exported default `App` from `./App`.
- Produces: tests that define required public content and assert no critical canvas dependency.

- [ ] **Step 1: Write the failing test**

```javascript
import { render, screen, within } from "@testing-library/react";
import App from "./App";

describe("modern portfolio redesign", () => {
  test("renders Drew as a React-focused product engineer", () => {
    const { container } = render(<App />);

    expect(
      screen.getByRole("heading", { name: /react product engineer/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Drew Johnson/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view resume/i })).toHaveAttribute(
      "href",
      expect.stringContaining("docs.google.com")
    );
    expect(container.querySelector("canvas")).not.toBeInTheDocument();
  });

  test("renders the primary portfolio sections and calls to action", () => {
    render(<App />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /featured projects/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /work together/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      expect.stringContaining("github.com")
    );
  });

  test("renders React skills and featured projects from portfolio data", () => {
    render(<App />);

    const skills = screen.getByRole("region", { name: /skills/i });
    expect(within(skills).getByText(/React/i)).toBeInTheDocument();
    expect(within(skills).getByText(/React Query/i)).toBeInTheDocument();
    expect(within(skills).getByText(/Component Systems/i)).toBeInTheDocument();

    const projects = screen.getByRole("region", { name: /featured projects/i });
    expect(within(projects).getByText(/AI Image Tools/i)).toBeInTheDocument();
    expect(within(projects).getByText(/Channel Program/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --watchAll=false`

Expected: FAIL because the current app does not expose the new "React Product Engineer" heading/section structure and still mounts canvas content.

- [ ] **Step 3: Commit**

```bash
git add portfolio/src/App.test.js
git commit -m "test: define modern portfolio render expectations"
```

### Task 2: Update portfolio data

**Files:**
- Modify: `portfolio/src/data/constants.js`

**Interfaces:**
- Produces:
  - `Bio.roles: string[]`
  - `Bio.description: string`
  - `Bio.email: string`
  - `metrics: Array<{ value: string, label: string }>`
  - `skillGroups: Array<{ title: string, summary: string, skills: string[] }>`
  - `processHighlights: Array<{ title: string, description: string }>`
  - Updated `projects` entries with accurate React-focused descriptions.

- [ ] **Step 1: Write minimal implementation data**

Add `email`, update role/copy, and export `metrics`, `skillGroups`, and `processHighlights`. Keep existing `experiences`, `education`, and `projects` exports but improve copy and duplicate IDs.

- [ ] **Step 2: Run tests**

Run: `npm test -- --watchAll=false`

Expected: still FAIL because `App.js` has not been redesigned yet.

- [ ] **Step 3: Commit**

```bash
git add portfolio/src/data/constants.js
git commit -m "feat: refresh portfolio content data"
```

### Task 3: Rebuild the one-page portfolio UI

**Files:**
- Replace most contents of: `portfolio/src/App.js`

**Interfaces:**
- Consumes: `Bio`, `metrics`, `skillGroups`, `experiences`, `projects`, `processHighlights` from `./data/constants`.
- Produces: accessible sections with ids `about`, `skills`, `experience`, `projects`, `process`, and `contact`.

- [ ] **Step 1: Implement the new layout**

Use styled-components and Framer Motion to render:

- `Nav`
- `Hero`
- `MetricGrid`
- `Skills`
- `Experience`
- `Projects`
- `Process`
- `Contact`
- `Footer`

Do not import `StartCanvas`, `EarthCanvas`, `Lanyard`, or any WebGL component.

- [ ] **Step 2: Run tests**

Run: `npm test -- --watchAll=false`

Expected: PASS for the new render tests after labels/headings match.

- [ ] **Step 3: Commit**

```bash
git add portfolio/src/App.js
git commit -m "feat: rebuild portfolio landing page"
```

### Task 4: Replace global visual system

**Files:**
- Modify: `portfolio/src/index.css`

**Interfaces:**
- Produces CSS variables, base layout styles, accessible focus states, scrollbar styling, ambient background support, and reduced-motion handling.

- [ ] **Step 1: Implement global styling**

Add:

- `:root` design tokens.
- `html`, `body`, `#root` full-height dark background.
- Focus-visible outline.
- Responsive image defaults.
- `@media (prefers-reduced-motion: reduce)` disabling animation/transition durations.

- [ ] **Step 2: Run tests and build**

Run:

```bash
npm test -- --watchAll=false
npm run build
```

Expected: tests pass; build exits 0.

- [ ] **Step 3: Commit**

```bash
git add portfolio/src/index.css
git commit -m "style: add modern portfolio visual system"
```

### Task 5: Manual preview and artifacts

**Files:**
- No source files unless preview reveals defects.

**Interfaces:**
- Produces screenshot and screen recording artifact paths for final summary.

- [ ] **Step 1: Start or refresh local preview**

Run in the existing tmux dev server session or restart it:

```bash
npm start
```

- [ ] **Step 2: Browser preview**

Use `computerUse` to open `http://localhost:3000`, capture desktop hero, projects/skills, and mobile screenshots.

- [ ] **Step 3: Record walkthrough**

Use `RecordScreen` around a `computerUse` walkthrough that scrolls from hero through projects/contact.

- [ ] **Step 4: Verify build one final time**

Run:

```bash
npm test -- --watchAll=false
npm run build
```

- [ ] **Step 5: Commit any fixes, push, and update PR**

```bash
git add <changed files>
git commit -m "fix: address portfolio preview issues"
git push -u origin cursor/modern-portfolio-redesign-eec3
```
