# Lesson 0: how a Next.js page becomes a website

## Outcome

Run the project and see Essy's headline in a browser. This milestone teaches the application structure. Matching the Lovable layout starts in the next milestone.

## The mental model

1. A visitor requests `/`, the homepage URL.
2. Next.js finds `src/app/page.tsx`.
3. The page component describes the content.
4. `src/app/layout.tsx` wraps that content in the shared HTML document.
5. `globals.css` supplies global styles and loads Tailwind utilities.

A **component** is a function that describes a piece of the interface. **JSX** is the HTML-like syntax inside JavaScript. **TypeScript** adds checks that help catch mistakes before the page runs. `.tsx` means TypeScript with JSX.

## 1. Read every line of the homepage

Open `src/app/page.tsx` next to this guide.

| Line | What it does |
| --- | --- |
| 1 | `export default` exposes the function as this file's main export. Next.js uses that export as the page component. `HomePage` is our descriptive function name. `()` means this function currently takes no arguments; `{` starts its body. |
| 2 | `return (` starts the JSX that the function returns. Parentheses let us write it across multiple lines. |
| 3 | `<main>` marks the primary content for the page. `className` is React's way to attach CSS classes. The utilities are explained below. |
| 4 | `<p>` creates a paragraph containing the site owner's name. Its classes select a small font and medium weight. |
| 5 | `<h1>` starts the page's primary heading. It has its own spacing, maximum width, size, weight, and line-height. |
| 6 | This is the visible headline, copied from the reference content. Plain text between JSX tags appears on the page. |
| 7 | `</h1>` closes the heading. |
| 8 | Another paragraph shows the three roles. `text-ink/70` uses our ink color at 70% opacity. |
| 9 | `</main>` closes the main content element. |
| 10 | `);` closes the returned expression and ends the return statement. |
| 11 | `}` closes the function body. |

### Every homepage utility

Sizes below use Tailwind's default spacing scale and a default 16px root font size. A `rem` is relative to that root font size.

| Utility | Meaning |
| --- | --- |
| `mx-auto` | Automatic left and right margins center a width-limited element. |
| `flex` | Use Flexbox to arrange children. |
| `min-h-screen` | Be at least as tall as the viewport (`100vh`). |
| `max-w-5xl` | Limit content width to 64rem, normally 1024px. |
| `flex-col` | Arrange children vertically. |
| `justify-center` | Center children along the main axis; with `flex-col`, that is vertical. |
| `px-6` | Add 1.5rem of left and right padding. |
| `py-16` | Add 4rem of top and bottom padding. |
| `text-sm` | Use a 0.875rem font size and the corresponding default line-height. |
| `font-medium` | Set font weight to 500. |
| `mt-6` | Add 1.5rem of space above an element. |
| `max-w-3xl` | Limit width to 48rem, normally 768px. |
| `text-4xl` | Set the font size to 2.25rem. |
| `font-normal` | Set font weight to 400. |
| `leading-tight` | Set line-height to 1.25 times the font size. |
| `sm:text-6xl` | From the `sm` breakpoint (40rem, normally 640px), use a 3.75rem font size. |
| `text-base` | Use a 1rem font size. |
| `text-ink/70` | Use the custom ink color with 70% opacity. |

**Product decision:** a width limit keeps text readable on a large screen. Responsive font sizes fit the same content on a phone and a desktop. Semantic `main` and `h1` elements express the page structure to browsers and assistive technology.

## 2. Read every line of the shared layout

Open `src/app/layout.tsx`.

| Line | What it does |
| --- | --- |
| 1 | Imports the `Metadata` type from Next.js. `import type` supplies a development-time shape check without adding a runtime import. |
| 2 | Imports React's `ReactNode` type, which describes renderable content such as elements, text, and arrays. |
| 3 | Imports the global stylesheet so its styles apply throughout the app. |
| 4 | A blank line separates imports from the next section. |
| 5 | Exports a constant called `metadata`. The `: Metadata` annotation checks the object's structure. `{` starts that object. |
| 6 | Sets the page title used in the browser tab and available to search engines. |
| 7 | Sets a concise page description. Search engines may use it in results; they can choose another snippet. |
| 8 | Closes the metadata object and statement. |
| 9 | A blank line separates metadata from the layout. |
| 10 | Defines and exports the layout component. `{ children }` extracts the `children` property from its input. `: { children: ReactNode }` describes that input's TypeScript shape. |
| 11 | Begins the JSX returned by the layout. |
| 12 | Opens the HTML document and declares that its content is English. |
| 13 | Opens the document body. `{children}` inserts the current page here; JSX braces evaluate a JavaScript expression. Then the body closes. |
| 14 | Closes the HTML document. |
| 15 | Closes the return expression. |
| 16 | Closes the function. |

**Product decision:** a shared layout gives every page a consistent document structure. We will add the original fonts here once we tackle visual matching. Next.js manages the head tags for exported metadata.

## 3. Read every line of the stylesheet

Open `src/app/globals.css`.

| Line | What it does |
| --- | --- |
| 1 | Loads Tailwind CSS so utility classes can generate styles. |
| 2 | Blank line for readability. |
| 3 | Starts Tailwind's `@theme` block, where we define reusable design values. |
| 4 | Defines the reference's near-white backdrop color. |
| 5 | Defines the reference's near-black ink color. This also enables utilities such as `text-ink`. |
| 6 | Defines the reference's sage green for upcoming buttons and accents. |
| 7 | Ends the theme block. |
| 8 | Blank line for readability. |
| 9 | Starts a CSS rule selecting the document's `body` element. |
| 10 | Uses the backdrop variable as the page background. `var(...)` reads a CSS variable. |
| 11 | Uses the ink variable as the inherited text color. |
| 12 | Uses a temporary system font stack. The browser tries Arial, then Helvetica, then its generic sans-serif font. The original fonts arrive in milestone 1. |
| 13 | Ends the body rule. |

**Product decision:** naming shared colors makes them easy to reuse and adjust consistently. These starter styles are deliberately small enough to explain in one sitting.

## 4. Understand the project files

### `package.json`

This JSON object describes the project and its packages. JSON uses double-quoted keys and values, colons between keys and values, and commas between entries. Braces enclose objects.

- `name` identifies the package; `version` labels this project version.
- `private: true` prevents accidental publication to the npm package registry. It does not make the website or GitHub repository private.
- `scripts` defines named terminal commands. `dev` runs the development server, `build` creates a production build, and `start` serves that completed build.
- `lint` checks code with ESLint. `typecheck` runs TypeScript with `--noEmit`, which checks types without writing compiled files.
- `dependencies` lists runtime packages: Next.js is the framework, React provides components, and React DOM integrates React with the browser document.
- `devDependencies` lists development/build packages: Tailwind and its PostCSS plugin compile styles; `@types/*` supplies type definitions; ESLint and its Next.js rules check code; TypeScript checks types.
- Exact versions pin selected framework packages. A `^` range permits compatible updates when resolving dependencies. The generated `package-lock.json` records the exact installed dependency tree, and `npm ci` reproduces it.

ESLint is pinned to 9.39.5 because the React lint plugin shipped in this Next.js configuration fails with ESLint 10. npm marks the 9.x line unsupported; revisit the pin when the upstream configuration supports the current ESLint major version. This affects development tooling.

### `postcss.config.mjs`, line by line

1. Creates a constant `config` holding an object.
2. Starts the `plugins` object.
3. Enables Tailwind's PostCSS plugin with default options (`{}`). PostCSS is part of the stylesheet processing pipeline.
4. Closes the plugins object.
5. Closes the configuration object.
6. Blank line.
7. Exports the configuration for the build tools to read.

`.mjs` declares a JavaScript module, allowing `import` and `export`.

### `eslint.config.mjs`, line by line

1. Imports helpers to define ESLint configuration and ignored paths.
2. Imports Next.js rules including its Core Web Vitals checks.
3. Imports Next.js TypeScript lint rules.
4. Blank line.
5. Starts exporting the combined configuration array. An array is an ordered list, enclosed in `[]`.
6. `...nextVitals` inserts the imported rule configurations into that list; `...` is spread syntax.
7. Inserts the TypeScript rule configurations.
8. Excludes generated build directories and the generated Next.js type entry file.
9. Closes the array, function call, and export statement.

Linting catches certain mistakes and suspicious patterns; it does not prove the design matches or every interaction works.

### `tsconfig.json`, each setting

- `compilerOptions` groups settings for the TypeScript checker.
- `target: ES2017` selects a JavaScript compilation target; Next.js also has its own build pipeline.
- `lib` includes browser and modern JavaScript API type definitions.
- `allowJs` permits JavaScript alongside TypeScript.
- `skipLibCheck` skips checking the internals of dependency declaration files.
- `strict` enables strict type checks, including checks around missing values.
- `noEmit` leaves code generation to Next.js.
- `esModuleInterop` helps different JavaScript module formats work together.
- `module: esnext` uses modern module syntax.
- `moduleResolution: bundler` resolves imports in a way suited to the bundler.
- `resolveJsonModule` permits importing JSON data.
- `isolatedModules` checks that files can be transformed independently.
- `jsx: react-jsx` selects React's JSX transform.
- `incremental` caches type-checking information for faster subsequent checks.
- `plugins` enables Next.js-specific editor/type-checking support.
- `paths` maps imports beginning with `@/` to the `src/` folder.
- `include` tells TypeScript which app and generated Next.js type files to check.
- `exclude` omits `node_modules` from the input file search; dependency types can still be resolved through imports.

### `.gitignore`, line by line

1. Excludes downloaded packages in `node_modules`.
2. Excludes generated Next.js build output.
3. Excludes static export output, if used later.
4. Excludes local Vercel project data, if used later.
5. Excludes environment files, which may contain credentials.
6. Allows a safe `.env.example` template to be tracked; `!` reverses an ignore rule.
7. Excludes TypeScript's incremental cache.
8. Excludes npm debug logs.
9. Excludes a macOS folder metadata file that collaborators may create.

### `next.config.mjs`, line by line

1. Creates the Next.js configuration object.
2. Opens its experimental-settings object.
3. Enables worker threads only when the `NEXT_WORKER_THREADS` environment variable equals the string `"1"`. An environment variable is a setting supplied by the terminal or hosting environment. This option lets this restricted Windows workspace perform build work in threads when creating child processes is blocked. Normal development and hosting retain the default when the variable is absent.
4. Uses TypeScript's API when the same switch is enabled, so type checking can also run in a worker thread. This still checks types; it changes how the checker runs. Otherwise Next.js uses its normal TypeScript command-line checker.
5. Closes the experimental settings.
6. Closes the configuration object.
7. Blank line.
8. Exports the configuration for Next.js.

This is an environment accommodation, not a feature of the personal website. The switch is experimental and should be rechecked when upgrading Next.js.

### Generated files

`next-env.d.ts` loads the Next.js and image-import type definitions through triple-slash reference directives. Next.js may update it to reference generated route types. Do not maintain that file by hand. `package-lock.json` is generated by npm: understand its purpose, but do not edit each dependency entry manually. `.next/` and `node_modules/` are generated and ignored by Git.

## 5. Your first exercise

1. Run `npm.cmd run dev` from the project folder and open the address shown.
2. Change the roles paragraph in `page.tsx` to include a role of your choice.
3. Save. The development server should update the page.
4. Explain why changing the heading's `sm:text-6xl` affects a wider screen but not a narrow one.
5. Restore the reference wording before we compare designs.

You should now be able to explain: which file answers `/`, how the page enters the layout, what JSX braces do, and how a Tailwind utility changes CSS.

## 6. The Git habit

A **commit** is a named snapshot of changes. A **push** sends local commits to GitHub. A working milestone is a useful point to return to if a later change breaks something.

For later milestones, after checking the result:

```powershell
git diff
git add src/app/page.tsx
git diff --cached
git commit -m "feat: describe the actual change"
git push origin main
```

`diff` shows unstaged changes. `add` selects the named file for the next commit. `diff --cached` shows exactly what is staged. `commit -m` records a snapshot with a message. `push origin main` sends the local `main` branch to the remote named `origin`. Stage the actual files changed in a milestone, rather than blindly staging everything.

## Next lesson

Recover the reference hero background, load Hanken Grotesk and Instrument Serif, and recreate the desktop navigation and static hero. Explain layout before adding the original motion.

Official references: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Next.js Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components), [Tailwind theme variables](https://tailwindcss.com/docs/theme).
