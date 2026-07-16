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

`src/main.jsx` mounts React and wraps the application in `HashRouter`.
`src/App.jsx` defines the available routes. Route pages render inside the
`Outlet` found in `AppLayout`.

```text
Browser URL
    ↓
HashRouter observes the URL hash
    ↓
Routes selects the matching Route
    ↓
AppLayout remains mounted
    ↓
The selected page renders inside Outlet
```

Examples:

```text
#/                          → HomePage
#/resources                 → ResourcesPage
#/guides/basic-walls        → BasicWallsPage
#/guides/teleports          → ComingSoonPage
#/guide-template            → GuideTemplatePage
```

The route below contains a dynamic parameter:

```jsx
<Route path="guides/:guideSlug" />
```

For `#/guides/teleports`, React Router makes `guideSlug` available through:

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

Use `#/guide-template` as the visual reference and
`src/pages/GuideTemplatePage.jsx` as the starter source.

1. Copy `GuideTemplatePage.jsx`.
2. Rename the file and component for the new guide.
3. Replace the metadata and example article content.
4. Add an explicit route in `App.jsx`.
5. Ensure the guide has an item in `src/data/navigation.js`.
6. Run the lint and build checks.

### Connecting a new page

A finished page must be connected in both `src/App.jsx` and
`src/data/navigation.js`. Import the page and add a specific route before the
generic `guides/:guideSlug` fallback:

```jsx
import ExamplePage from './pages/ExamplePage'

<Route path="guides/example" element={<ExamplePage />} />
<Route path="guides/:guideSlug" element={<ComingSoonPage />} />
```

Then add the matching root-relative URL to the appropriate navigation group:

```js
{
  label: 'Example guide',
  to: '/guides/example',
}
```

The route and navigation URL must describe the same path. Route definitions
nested beneath `AppLayout` omit the initial slash; navigation links include it.
Do not add `#` yourself—`HashRouter` manages that part of the browser URL.

Use consistent filename, component, import, and export names. Page filenames
use PascalCase, such as `ExamplePage.jsx`, and the file ends with:

```jsx
export default ExamplePage
```

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

Import `publicAsset` and use it for files in `public`. The helper removes any
leading slash from the supplied path and prefixes it with Vite's
`import.meta.env.BASE_URL`:

```jsx
import publicAsset from '../utils/publicAsset'

<GuideImage
  src={publicAsset('guides/basic-walls/wall-types.png')}
  alt="The wall types available in the editor"
  caption="Wall pieces available from the block selection menu."
/>
```

This is also required for other public assets, such as author avatars:

```jsx
<GuideHeader avatar={publicAsset('avatars/author-name.png')} />
```

Vite sets `BASE_URL` from the `base` option in `vite.config.js`. The production
base is `/wizordum-guide-site/`, while Vite supplies the appropriate base during
local development. Do not hard-code root-relative public paths such as
`/guides/...`; they would point at the domain root instead of the GitHub Pages
project path after deployment.

Real images support click-to-enlarge behaviour through a native dialog.

Images fill the available article width by default. Use the optional
`maxWidth` prop for screenshots that are clearer at a smaller size. The figure
remains responsive and centred, so it will still shrink on narrow screens:

```jsx
<GuideImage
  src={publicAsset('guides/interface/layer-controls.png')}
  alt="The layer controls in the editor interface"
  caption="Layer controls."
  maxWidth="28rem"
/>
```

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

Token names must match those declared in `src/styles/tokens.css`. An undefined
custom property invalidates the whole declaration that uses it. For example,
this project provides `--radius-small`, `--radius-medium`, and
`--radius-large`; it does not provide abbreviated `--radius-md` or
`--radius-lg` tokens.

## Searchable shortcut reference

Editor shortcut content lives in `src/data/editorShortcuts.js` and is rendered
by `ShortcutFinder`. Keeping the content separate from the component makes it
possible to add or correct controls without rewriting the search interface.

Each entry uses this shape:

```js
{
  id: 'rotate-actor-left',
  category: 'Selection',
  keyGroups: [['Left Shift', 'Q']],
  action: 'Rotate the selected actor counter-clockwise.',
  context: 'Selection mode',
  searchTerms: ['turn', 'object', 'decoration'],
}
```

Each inner `keyGroups` array represents keys pressed together. Multiple inner
arrays represent alternatives:

```js
// Left Shift + Q
keyGroups: [['Left Shift', 'Q']]

// Numpad Enter or F1
keyGroups: [['Numpad Enter'], ['F1']]
```

`searchTerms` contains useful synonyms that should find the shortcut without
being displayed. IDs must be unique, because React uses them as list keys.

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

The site is deployed to GitHub Pages by `.github/workflows/deploy.yml`. A push to
`main` (or a manual workflow dispatch) installs dependencies with `npm ci`, runs
the Vite production build, uploads `dist`, and deploys it with the official
GitHub Pages actions. The workflow uses the `github-pages` environment and
publishes the deployment URL reported by GitHub Pages.

Vite builds the site under `/wizordum-guide-site/`, and `HashRouter` keeps the
client-side route after `#` (for example,
`/wizordum-guide-site/#/guides/basic-walls`). Because the server only receives
the path before the hash, GitHub Pages does not need rewrite rules for React
Router routes. Public asset URLs use the same project base through
`import.meta.env.BASE_URL` and `publicAsset`.
