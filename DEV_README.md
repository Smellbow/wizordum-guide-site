# Wizordum Mapping Guide: Developer Guide

This document explains how the site works for someone who is still learning
React. It follows the application from the first HTML file the browser loads,
through React and React Router, into the persistent layout and individual
pages. It also explains the reusable components, data files, CSS system,
animations, public assets, and GitHub Pages deployment.

The shorter `README.md` is the quick project and content-authoring reference.
This file is the deeper maintenance guide.

## The application in one picture

```text
index.html
    ↓ loads
src/main.jsx
    ↓ creates the React application and HashRouter
src/App.jsx
    ↓ matches the current URL to a route
AppLayout
    ├── Header
    │   ├── Navigation
    │   └── ThemeToggle
    ├── main
    │   └── Outlet
    │       └── the page selected by the current route
    └── Footer
```

The important idea is that `AppLayout` remains mounted while the component
inside `Outlet` changes. The header, navigation, theme control, main landmark,
and footer therefore form one persistent application shell.

## Development commands

Install the dependencies once:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Before considering a change finished:

```bash
npm run lint
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The scripts are declared in `package.json`:

- `dev` starts Vite's development server.
- `lint` asks ESLint to check the JavaScript and JSX.
- `build` creates the production site in `dist/`.
- `preview` serves the completed `dist/` build locally.

Do not edit `dist/` by hand. Vite replaces it whenever the site is built.

## Important folders and files

```text
wizzy-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          GitHub Pages deployment
├── public/                     Files copied directly into the build
│   ├── actors/                 Actor reference images
│   ├── avatars/                Author and community avatars
│   ├── decor/                  Decorative site artwork
│   ├── guides/                 Guide screenshots
│   └── resources/              Resource card icons
├── src/
│   ├── components/
│   │   ├── actors/             Actor search and detail interface
│   │   ├── animation/          Reusable GSAP presentation
│   │   ├── article/            Reusable guide components
│   │   ├── layout/             Application shell
│   │   ├── navigation/         Primary navigation
│   │   └── theme/              Theme control
│   ├── data/
│   │   ├── actors.js           Actor reference content
│   │   ├── editorShortcuts.js  Searchable editor shortcuts
│   │   └── navigation.js       Header navigation groups
│   ├── hooks/
│   │   ├── useDocumentTitle.js Page title helper
│   │   └── useTheme.js         Theme state and persistence
│   ├── pages/                  Components selected by routes
│   ├── styles/                 Global CSS and design tokens
│   ├── utils/
│   │   └── publicAsset.js      GitHub Pages-safe public paths
│   ├── App.jsx                 Route definitions
│   └── main.jsx                React entry point
├── index.html                  Initial HTML document
├── package.json                Scripts and dependencies
└── vite.config.js              Vite configuration and production base
```

Most components have a nearby CSS file with the same base name. For example,
`ActorBrowser.jsx` imports `ActorBrowser.css`. Importing that CSS from the
component tells Vite to include it in the final stylesheet.

## 1. The browser starts with `index.html`

Vite uses the root `index.html` as the entry HTML document. Its body contains:

```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

At this point there is no visible React page. `#root` is an empty container
which gives React a known DOM element to control. The module script loads
`src/main.jsx`.

The favicon links use `%BASE_URL%`. Vite replaces that placeholder with the
correct base path during development and production builds.

## 2. `main.jsx` creates the React application

The essential line is:

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
```

Read it from the inside out:

1. `<App />` is the top-level application component.
2. `<HashRouter>` gives App and all its descendants access to routing.
3. `<StrictMode>` enables extra development checks.
4. `document.getElementById('root')` finds the empty element in `index.html`.
5. `createRoot(...).render(...)` asks React to render the component tree there.

`StrictMode` can deliberately run some component and effect logic more than
once during development. This helps reveal missing cleanup and unsafe side
effects. It does not cause the same double checking in the production build.

`main.jsx` also imports `src/styles/index.css`, which begins the global CSS
cascade.

## 3. Why the site uses `HashRouter`

The live site is hosted in the GitHub Pages project directory:

```text
/wizordum-guide-site/
```

`HashRouter` stores the React route after `#`:

```text
https://smellbow.github.io/wizordum-guide-site/#/actors
```

The web server receives only `/wizordum-guide-site/`. React Router reads
`#/actors` in the browser and selects the Actors page. This avoids requiring
GitHub Pages to rewrite unknown paths to `index.html`.

Inside React components, route destinations do not include the hash:

```jsx
<Link to="/actors">Actor reference</Link>
```

`HashRouter` adds the URL hash itself.

## 4. `App.jsx` maps URLs to page components

`App.jsx` imports each page and declares the routes:

```jsx
<Routes>
  <Route element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path="actors" element={<ActorsPage />} />
    <Route path="guides/:guideSlug" element={<ComingSoonPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
</Routes>
```

Important React Router terms:

- `Routes` examines its child routes and chooses the best match.
- `Route` connects a URL path to an element.
- The `index` route is the home page for its parent route.
- `:guideSlug` is a dynamic parameter, such as `teleports`.
- `*` matches anything not handled by another route.
- A route containing child routes is a layout route.

All current routes are children of the route that renders `AppLayout`.
Therefore every page appears inside that layout's `Outlet`.

Specific guide routes are declared before the generic
`guides/:guideSlug` route for readability. React Router ranks route
specificity, so a specific route such as `guides/basic-walls` is selected over
the dynamic fallback.

The historical `TransparantTexture` filename and
`guides/Transparant-Texture` route use their existing spelling. Renaming them
requires checking the component import, route, navigation item, and any links.

## 5. `AppLayout` is the persistent site shell

`src/components/layout/AppLayout.jsx` renders:

```jsx
<div className="site-shell">
  <a className="skip-link" href="#main-content">
    Skip to main content
  </a>

  <Header />

  <main id="main-content" ref={mainRef} tabIndex="-1">
    <Outlet />
  </main>

  <Footer />
</div>
```

### `Outlet`

`Outlet` is a placeholder owned by React Router. If the URL is `#/actors`,
React Router puts `ActorsPage` there. If it changes to `#/credits`, it replaces
that page with `CreditsPage`; `Header` and `Footer` remain in place.

### Route-change scroll and focus

`useLocation()` supplies the current `pathname` and secondary `hash`.

When the pathname changes, a `useEffect`:

1. scrolls the window to the top;
2. focuses the main landmark without scrolling it again.

The main landmark has `tabIndex="-1"` so JavaScript can focus it even though it
is not part of the normal Tab order. This helps keyboard and assistive
technology users understand that new page content has loaded.

When an in-page hash changes, the second effect finds the matching section ID
and scrolls it into view. `OnThisPage` relies on this behavior.

### Route animation

`useGSAP` animates the main area when `pathname` changes. The animation is
scoped to `mainRef`, is reverted when it updates, and is skipped when the user
prefers reduced motion.

## 6. Header, navigation, theme, and footer

### `Header`

`Header.jsx` combines four responsibilities:

- the home/brand link;
- mobile menu open state;
- the primary `Navigation`;
- `ThemeToggle`.

`menuOpen` is state:

```jsx
const [menuOpen, setMenuOpen] = useState(false)
```

State is information React remembers between renders. Calling `setMenuOpen`
causes React to render the component again using the new value.

The menu button exposes its state with `aria-expanded` and identifies the
controlled element with `aria-controls`. While the menu is open, an effect
listens for Escape. Its cleanup removes the document listener when the menu
closes or the component unmounts.

`menuButtonRef` remembers the actual button DOM element so focus can return to
it after Escape closes the menu.

The brand image is decorative because the adjacent text and link label already
provide its meaning. It therefore has an empty `alt`.

### `Navigation`

`Navigation.jsx` renders the groups from `src/data/navigation.js`. This is an
example of data-driven rendering: the repeated menu content lives in data, and
the component uses `.map()` to turn it into JSX.

Its own `openGroup` state records which dropdown is open. It:

- closes a dropdown after navigation;
- closes when the user clicks outside the navigation;
- closes with Escape and returns focus to the dropdown button;
- uses `NavLink` for route-aware links;
- identifies the group containing the current page.

`Header` passes an `onNavigate` function as a prop:

```jsx
<Navigation onNavigate={() => setMenuOpen(false)} />
```

A prop is an input supplied by a parent component. `Navigation` calls this
function after a link is selected, allowing its parent `Header` to close the
mobile menu.

### `useTheme` and `ThemeToggle`

`useTheme` is a custom hook. A custom hook is a reusable function whose name
starts with `use` and which can call other React hooks.

The initial theme is chosen in this order:

1. a valid saved value from local storage;
2. the operating-system light preference;
3. dark mode.

When the theme changes, an effect:

- sets `data-theme` on the root `<html>` element;
- saves the choice to local storage.

`ThemeToggle` is intentionally presentational. It receives the current theme
and an `onToggle` function through props, then renders the appropriate label
and icon.

### `Footer`

`Footer.jsx` contains persistent project text and internal React Router links.
Use `Link` for destinations within this application. Use a normal `<a>` for
external websites or downloads.

## 7. Pages

A page is still a React component. It is called a page because a route renders
it as the primary content.

Most pages call:

```jsx
useDocumentTitle('Page name')
```

The hook updates the browser tab to:

```text
Page name | Wizordum Mapping Guide
```

### Home page

`HomePage.jsx` demonstrates:

- internal `Link` and external `<a>` elements;
- the reusable `AnimatedTitle`;
- a random decorative sprite chosen once with a `useState` initializer;
- a component-scoped GSAP animation;
- ordinary semantic sections and articles.

The function passed to `useState` runs when the component state is first
created. This keeps the random sprite stable during unrelated re-renders.

### Guide pages

Guide pages such as `BasicWallsPage`, `InterfacePage`, and
`GuideTemplatePage` use the reusable article components. They normally render:

```jsx
<article className="guide-page article-width">
  <GuideHeader />
  <OnThisPage />
  <section id="first-topic">...</section>
</article>
```

`GuideTemplatePage.jsx` is the starting point for new guide pages.

### Resources and credits

`ResourcesPage.jsx` and `CreditsPage.jsx` keep repeated card content in local
arrays. Each component maps its array into semantic list items. This is easier
to maintain than copying the same JSX for every card.

Optional icons and avatars use conditional rendering:

```jsx
{person.avatar ? <img ... /> : <span>...</span>}
```

Only one branch is rendered.

### Actor reference

`ActorsPage.jsx` is a small route-level wrapper. It:

- sets the document title;
- provides the page heading and introduction;
- imports `actors`;
- passes the data to `ActorBrowser`.

Keeping the route page small lets `ActorBrowser` concentrate on interaction
while `actors.js` concentrates on content.

### Coming-soon and not-found pages

`ComingSoonPage` handles URLs matching `guides/:guideSlug`. It reads the slug
with `useParams`, checks whether the path exists in navigation data, and either
shows the planned guide title or explains that the guide is unknown.

`NotFoundPage` is selected by the `*` route. It chooses one random message per
mount, loads its image through `publicAsset`, and uses a scoped GSAP timeline.

## 8. Reusable article components

### `GuideHeader`

`GuideHeader` accepts:

- `category`;
- `title`;
- `summary`;
- `author`;
- ISO `published` date;
- optional `avatar`.

It formats the date for display while preserving the ISO date in the semantic
`time` element. Without an avatar, it shows the author's first initial.

Because the author's name is visible beside the avatar, the avatar uses an
empty alt attribute to avoid repeating the same information.

### `GuideImage`

`GuideImage` supports real images and placeholders.

With `src`, it renders a responsive image button. Activating it opens a native
`dialog` containing the enlarged image. The dialog is held in `dialogRef`, and
`showModal()` opens it.

Without `src`, it renders a labelled placeholder using the `ratio` and
`dimensions` props. `maxWidth` sets a component CSS custom property so an image
can remain smaller while still shrinking on narrow screens.

### `GuideNote`

`GuideNote` accepts a `title` and arbitrary nested `children`. `children` is
the JSX placed between a component's opening and closing tags:

```jsx
<GuideNote title="Warning">
  <p>Nested content becomes the children prop.</p>
</GuideNote>
```

It renders an `aside` because its information supports the main guide flow.

### `OnThisPage`

`OnThisPage` receives an array of `{ id, label }` objects. It builds links to
section IDs on the current pathname. Each target section must use the exact
matching `id`.

### `Key`

`Key` is a small wrapper around the semantic `kbd` element. It makes editor
input visually and semantically consistent.

### `ShortcutFinder`

`ShortcutFinder` imports `editorShortcuts`, stores the input text in state,
normalises it to lowercase, and filters the data on every render.

It searches:

- category;
- key names;
- action;
- context;
- optional invisible search terms.

The result count uses `aria-live="polite"` so assistive technology can report
changes without interrupting the user.

On small screens, the results become single-column cards inside a bounded
scroll region. The search field and count remain outside that long list.

## 9. How `ActorBrowser` works

`ActorBrowser` combines React state with URL state.

### Search state

`searchTerm` contains what the user typed:

```jsx
const [searchTerm, setSearchTerm] = useState('')
```

The component builds searchable text from each actor's name, category, summary,
description, example, tags, and parameters. It then uses `.filter()` to create
the visible result array.

### Selected actor URL state

`useSearchParams` reads and updates the query string:

```text
#/actors?actor=door
```

The `actor` value is matched against an actor ID. This makes selections
bookmarkable, shareable, and compatible with browser history.

When the detail view closes, the component removes only the `actor` parameter
from a copied `URLSearchParams` object.

### Mobile focus behavior

After a user selects an actor on a viewport no wider than `50rem`, an effect
focuses the actor detail heading. This brings newly rendered details into view
after the bounded result list.

`shouldFocusDetailsRef` distinguishes an intentional result-button selection
from opening a bookmarked actor URL. A bookmarked page therefore does not steal
focus when it first loads.

### Actor data

Entries in `src/data/actors.js` use:

```js
{
  id: 'enemy-spawner',
  name: 'Enemy Spawner',
  category: 'Objects',
  summary: 'Short result description.',
  description: 'Full detail explanation.',
  example: 'A practical mapping example.',
  parameters: [
    {
      name: 'Enemy type',
      description: 'What this parameter changes.',
    },
  ],
  tags: ['spawn', 'enemy', 'ambush'],
  image: 'actors/enemyspawner.png',
  imageAlt: 'Optional useful image description.',
  related: ['player-trigger'],
}
```

Rules for actor data:

- IDs must be unique, lowercase, and hyphenated.
- `parameters` must always be an array; use `[]` when empty.
- `tags` must always be an array; use lowercase search terms.
- `image` is relative to `public/`.
- `imageAlt` is optional; the browser supplies a name-based fallback.
- `related` stores exact IDs of other actor entries.
- Related-actor links are not rendered yet.

The actor reference currently displays a work-in-progress warning because its
entries are still being completed and verified.

## 10. Data-driven rendering

Three important interfaces separate repeated content from rendering logic:

- `navigation.js` supplies groups and links to `Navigation`.
- `editorShortcuts.js` supplies searchable controls to `ShortcutFinder`.
- `actors.js` supplies searchable actor records to `ActorBrowser`.

The common pattern is:

```jsx
data.map((item) => (
  <Component key={item.id} item={item} />
))
```

React needs a stable `key` to identify each repeated item between renders.
Keys should come from persistent unique data, not array positions when a real
ID is available.

## 11. Public assets and `publicAsset`

Files under `public/` are copied to the build without being imported into
JavaScript. Store their paths relative to `public`:

```text
public/actors/door.png
```

Use:

```jsx
import publicAsset from '../utils/publicAsset'

<img src={publicAsset('actors/door.png')} alt="..." />
```

`publicAsset` removes accidental leading slashes and prefixes Vite's
`import.meta.env.BASE_URL`.

Production uses:

```text
/wizordum-guide-site/
```

Without `publicAsset`, a hard-coded `/actors/door.png` would incorrectly point
to the domain root instead of the GitHub Pages project directory.

The exceptions are asset references Vite itself processes, such as the module
script in `index.html` and CSS/JavaScript imports under `src`.

## 12. CSS architecture

The global layer order is declared in `src/styles/index.css`:

```css
@layer reset, tokens, base, layout, components, utilities, overrides;
```

Earlier layers have lower priority than later layers. This gives the project a
predictable cascade without relying on increasingly complicated selectors.

`index.css` imports:

- `reset.css` into the reset layer;
- `tokens.css` into the tokens layer;
- `base.css` into the base layer;
- `utilities.css` into the utilities layer.

Layout and component styles are imported by their React components and declare
their own layers where needed.

### Tokens

`tokens.css` is the shared design vocabulary. It contains:

- Endesga 32 primitive colours;
- semantic theme colours;
- font families;
- spacing;
- radii;
- content widths;
- shadows.

Components should normally use semantic tokens:

```css
color: var(--color-text);
background: var(--color-surface);
border-color: var(--color-border);
```

Use the exact radius names:

```css
var(--radius-small)
var(--radius-medium)
var(--radius-large)
```

An undefined custom property invalidates the CSS declaration that uses it.

### Themes

Dark values live on `:root`. Light mode overrides semantic tokens on:

```css
:root[data-theme='light']
```

Components do not need separate dark and light selectors when they use
semantic tokens correctly.

### Width utilities

Two important utility classes are:

- `.page-width` for wide route pages and grids;
- `.article-width` for readable guide articles.

Both preserve horizontal page padding and centre their content.

### Responsive design

Components add media queries close to the styles they change. The actor and
shortcut lists use bounded scrolling on small screens so long datasets do not
hide later content. Actor results collapse to one column on narrow phones.

When adding styles, test:

- approximately 320 CSS pixels wide;
- 200% browser zoom;
- light and dark themes;
- reduced motion;
- long headings and content;
- keyboard focus visibility.

## 13. Animation with GSAP

The project uses `@gsap/react` rather than placing animations directly in the
component body.

The usual pattern is:

```jsx
const scopeRef = useRef(null)

useGSAP(
  () => {
    // create animation

    return () => {
      // kill or revert anything needing explicit cleanup
    }
  },
  { scope: scopeRef },
)
```

Important rules:

- register plugins outside the component;
- scope selectors to a component ref;
- skip optional motion for `prefers-reduced-motion`;
- clean up timelines and plugins;
- never hide essential information unless animation succeeds.

`AnimatedTitle` uses GSAP SplitText to animate homepage characters. It reverts
the split DOM during cleanup. `AppLayout`, `HomePage`, and `NotFoundPage` each
use scoped animations for their own content.

## 14. Accessibility behavior to preserve

The project already includes several accessibility patterns:

- semantic `header`, `nav`, `main`, `article`, `section`, and `footer`;
- a keyboard-visible skip link;
- one primary `h1` per page;
- route-change focus on the main landmark;
- Escape handling and focus return for menus;
- `aria-expanded` and `aria-controls` on disclosure buttons;
- live result counts;
- visible focus indicators;
- descriptive or deliberately empty alternative text;
- external-link text explaining that a new tab opens;
- native dialogs for enlarged guide images;
- reduced-motion support.

When adding content:

- choose headings by document hierarchy, not desired visual size;
- give informative images useful alt text;
- use `alt=""` for genuinely decorative or redundant images;
- keep controls reachable and understandable by keyboard;
- do not communicate state through colour alone;
- do not remove focus outlines;
- make touch targets comfortably large;
- check that long lists do not bury essential content.

## 15. Common maintenance workflows

### Add a completed guide

1. Copy `src/pages/GuideTemplatePage.jsx`.
2. Rename the file and component using PascalCase.
3. Replace the template metadata and sections.
4. Store screenshots in a descriptive `public/guides/...` folder.
5. Pass public paths through `publicAsset`.
6. Import the page in `App.jsx`.
7. Add its specific route before the generic guide fallback.
8. Add or update its matching entry in `navigation.js`.
9. Check every `OnThisPage` ID against its section ID.
10. Run lint and build.

Route:

```jsx
<Route path="guides/example" element={<ExamplePage />} />
```

Navigation:

```js
{
  label: 'Example guide',
  to: '/guides/example',
}
```

Do not put `#` in either value.

### Add a planned guide

If a navigation entry points to `/guides/example` but there is no specific
route, `ComingSoonPage` handles it through `guides/:guideSlug`. Add the
navigation item first, then add a specific route when the article is ready.

### Add an actor

1. Add the image under `public/actors/`.
2. Add one object to `src/data/actors.js`.
3. Choose a unique lowercase hyphenated ID.
4. Include `parameters: []` and `tags: []` even when empty.
5. Use lowercase tags containing useful search synonyms.
6. Store the image path relative to `public`.
7. Ensure every `related` value exactly matches another actor ID.
8. Search for the actor by its name, tags, and parameter terms.
9. Test its bookmarkable `?actor=` URL.
10. Check image alt text, narrow-screen focus, lint, and build.

### Add a shortcut

1. Add an object to `src/data/editorShortcuts.js`.
2. Give it a unique stable ID.
3. Put simultaneously pressed keys in one inner `keyGroups` array.
4. Put alternative combinations in separate inner arrays.
5. Add concise action and context text.
6. Add invisible synonyms to `searchTerms`.
7. Test searching by key, action, context, and synonym.

Example:

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

### Add a navigation group or link

Edit `src/data/navigation.js`. A link must correspond to a real route or an
intentional `ComingSoonPage` path. Navigation destinations begin with `/`, but
nested route paths in `App.jsx` do not.

## 16. Deployment

`vite.config.js` sets:

```js
base: '/wizordum-guide-site/'
```

This tells Vite where built scripts, styles, and public assets live on GitHub
Pages.

`.github/workflows/deploy.yml` runs on:

- every push to `main`;
- manual workflow dispatch.

The workflow:

1. checks out the repository;
2. installs an LTS version of Node;
3. runs `npm ci`;
4. runs `npm run build`;
5. configures GitHub Pages;
6. uploads `dist`;
7. deploys the uploaded artifact.

Because pushes to `main` deploy automatically, run lint and build before
committing or pushing.

## 17. Debugging guide

### A page link shows Coming Soon

Check whether `App.jsx` contains a specific route matching the navigation path.
If not, `guides/:guideSlug` is doing its job.

### A page shows Not Found

Compare:

- the `to` value in the link;
- the route `path` in `App.jsx`;
- spelling, capitalisation, and hyphens.

### An image works locally but not on GitHub Pages

Check that:

- it is inside `public/`;
- the filename and case match exactly;
- the component calls `publicAsset`;
- the stored path does not depend on the domain root.

### A component does not update

Ask:

- Is the changing value stored in React state?
- Was the state setter called?
- Is the component receiving the expected prop?
- Is the displayed array derived from the current state?
- Is a URL parameter spelled exactly like the corresponding data ID?

### An effect runs twice in development

Remember that `StrictMode` deliberately performs extra development checks.
The effect should be safe to repeat and should clean up listeners, timelines,
or other external work.

### Styles do not apply

Check:

- whether the CSS file is imported;
- whether the class name matches the JSX;
- whether the rule is in the expected cascade layer;
- whether every custom property exists in `tokens.css`;
- whether a later layer overrides it.

### A list renders incorrectly

Check that every item has a stable unique React `key` and that required arrays
exist even when empty.

## 18. Small React glossary

### Component

A JavaScript function that returns JSX describing part of the interface.

### JSX

HTML-like syntax inside JavaScript. JSX becomes React element instructions
during the Vite build.

### Prop

An input passed from a parent component to a child component. Props are
read-only from the child's perspective.

### State

Information a component remembers. Updating state asks React to render again.

### Hook

A React function beginning with `use`, such as `useState`, `useEffect`, or
`useRef`. Hooks must be called at the top level of a component or custom hook.

### Effect

Code that synchronises React with something outside rendering, such as the
document title, local storage, event listeners, focus, or scrolling.

### Ref

A persistent mutable object commonly used to access a DOM element without
making it state.

### Render

React calling components to calculate what the interface should look like for
the current props and state.

### Conditional rendering

Choosing which JSX to return based on a value.

### Data-driven rendering

Storing repeated content in arrays or objects and mapping it into reusable JSX.

### Route

A rule connecting a browser location to a page component.

### Outlet

The location in a parent route where the selected child route renders.

## Final maintenance principle

Keep three concerns separate when possible:

```text
content/data       → src/data or a page's local data
rendering/behavior → React components and hooks
appearance         → CSS and design tokens
```

This separation is why actor content can grow without rewriting
`ActorBrowser`, shortcuts can grow without rewriting `ShortcutFinder`, and
new guide pages can reuse the same article components.
