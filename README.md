# Wizordum Mapping Guide

A responsive community guide for the Wizordum map editor, built with Vite,
React, React Router, GSAP, and the Endesga 32 colour palette.

The website supplements the official Wizordum documentation with practical
examples, mapper discoveries, and detailed editor techniques.

## Development

```bash
npm install
npm run dev
```

Other useful commands:

```bash
npm run lint
npm run build
npm run preview
```

## How rendering works

`src/main.jsx` mounts React and wraps the application in `BrowserRouter`.
`src/App.jsx` defines the available routes. Route pages render inside the
`Outlet` found in `AppLayout`.

```text
Browser URL
    ↓
BrowserRouter observes the location
    ↓
Routes selects the matching Route
    ↓
AppLayout remains mounted
    ↓
The selected page renders inside Outlet
```

Examples:

```text
/                           → HomePage
/resources                  → ResourcesPage
/guides/basic-walls         → BasicWallsPage
/guides/teleports           → ComingSoonPage
/guide-template             → GuideTemplatePage
```

The route below contains a dynamic parameter:

```jsx
<Route path="guides/:guideSlug" />
```

For `/guides/teleports`, React Router makes `guideSlug` available through:

```jsx
const { guideSlug } = useParams()
```

Explicit guide routes take priority over the generic coming-soon route.

## Project structure

```text
src/
├── components/
│   ├── animation/       GSAP presentation components
│   ├── article/         Reusable guide-page components
│   ├── layout/          Persistent header, footer, and app shell
│   ├── navigation/      Primary navigation
│   └── theme/           Theme controls
├── data/                Navigation and other shared data
├── hooks/               Reusable React behaviour
├── pages/               Route-level page components
├── styles/              Reset, tokens, base styles, and utilities
├── App.jsx              Route definitions
└── main.jsx             React entry point
```

## Creating a guide

Use `/guide-template` as the visual reference and
`src/pages/GuideTemplatePage.jsx` as the starter source.

1. Copy `GuideTemplatePage.jsx`.
2. Rename the file and component for the new guide.
3. Replace the metadata and example article content.
4. Add an explicit route in `App.jsx`.
5. Ensure the guide has an item in `src/data/navigation.js`.
6. Run the lint and build checks.

A standard guide begins with:

```jsx
<GuideHeader
  category="Mapping basics"
  title="Guide title"
  summary="A concise description of what the reader will learn."
  author="Author name"
  published="2026-07-16"
  avatar="/authors/author-name.png"
/>
```

If `avatar` is omitted, `GuideHeader` displays the author’s first initial.
Use an ISO date in `YYYY-MM-DD` format. The component formats it for display
and preserves a machine-readable value in the HTML `time` element.

## Guide images

Store guide images under a descriptive public path:

```text
public/guides/basic-walls/wall-types.png
```

Use a root-relative source:

```jsx
<GuideImage
  src="/guides/basic-walls/wall-types.png"
  alt="The wall types available in the editor"
  caption="Wall pieces available from the block selection menu."
/>
```

Real images support click-to-enlarge behaviour through a native dialog.

If an image is not ready, omit `src`:

```jsx
<GuideImage
  alt="Description of the planned image"
  caption="Context for the planned image."
  dimensions="1600 × 900 px"
  ratio="16 / 9"
/>
```

Alternative text should describe useful visual information. Captions explain
how an image relates to the guide.

## Navigation

Navigation content is defined in `src/data/navigation.js`. Each item has:

```js
{
  label: 'Visible link text',
  to: '/guides/example-path',
}
```

`Navigation.jsx` maps this data into accessible dropdowns and `NavLink`
components. `NavLink` automatically adds `aria-current="page"` when its route
is active, and CSS uses that attribute to provide the active treatment.

## CSS architecture

The global cascade order is declared once:

```css
@layer reset, tokens, base, layout, components, utilities, overrides;
```

- `reset`: removes inconsistent browser defaults.
- `tokens`: Endesga primitives and semantic design values.
- `base`: typography and document-wide element styles.
- `layout`: large structural relationships.
- `components`: component-specific styles.
- `utilities`: small reusable classes.
- `overrides`: exceptional last-resort changes.

Components should consume semantic properties:

```css
color: var(--color-text);
background: var(--color-surface);
```

Avoid raw hex values in component files.

## Themes

Dark-theme semantic tokens are defined on `:root`. Light-theme values override
them through:

```css
:root[data-theme='light']
```

`useTheme` checks local storage for a saved choice, falls back to the operating
system preference, sets `data-theme` on the root HTML element, and saves manual
changes.

## Animation

GSAP handles optional presentation effects.

- `AppLayout` animates route content.
- `AnimatedTitle` uses SplitText for the homepage heading.
- Essential content must never depend on animation.
- Every animation must respect `prefers-reduced-motion`.
- React animations should use `useGSAP` for cleanup.

## Accessibility expectations

- Maintain one `h1` per page and logical heading levels.
- Use semantic landmarks and elements.
- Ensure every control is keyboard accessible.
- Preserve visible focus indicators.
- Use `aria-current` for active navigation.
- Give meaningful images useful alternative text.
- Test at approximately 320 CSS pixels and 200% zoom.
- Test light and dark themes for WCAG AA contrast.
- Test menus and dialogs with Tab, Shift+Tab, Enter, and Escape.
- Avoid communicating information through colour alone.

## Deployment note

The site uses clean browser routes. A static host must rewrite unknown requests
to `index.html`, allowing React Router to interpret paths such as
`/guides/basic-walls`.

The exact rewrite configuration depends on the hosting provider selected later.
