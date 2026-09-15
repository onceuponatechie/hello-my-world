# Hello, my world

Essy Udeme's personal website, rebuilt in Next.js while learning frontend development.

## Current milestone: 1 — navigation and a static hero

The original font families, hero content, two photos, buttons, and navigation layout are now in place. Native HTML controls open the resource dropdown and mobile navigation. The Lovable hero background, remaining sections/pages, and original animations are still pending. Visual parity has not been assessed against a live reference.

Navigation destinations are preserved from the source. Four supporting pages are not built yet, and the project, resources, about, and contact sections do not yet exist. Those links become functional as their milestones are completed.

- Reference: https://github.com/onceuponatechie/butter-canvas-dream
- Destination: https://github.com/onceuponatechie/hello-my-world
- Stack: Next.js App Router, React, TypeScript, Tailwind CSS, npm.
- Current lesson: [Fonts, components, and the static hero](docs/01-navigation-and-hero.md).
- Previous lesson: [Foundation walkthrough](docs/00-foundation.md).
- Follow the build: [Milestones and reference audit](docs/roadmap.md).

## Run locally

In a terminal opened inside this folder:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local address printed in the terminal (usually http://localhost:3000). Keep the terminal running while you edit. Press Ctrl+C to stop.

`npm.cmd` works in Windows PowerShell without changing its script execution policy. Other shells can use `npm`.

## Check a change

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

For a fresh clone, `npm.cmd ci` installs the exact versions in the committed lockfile.

## Learning loop

Build one small change, explain every new line and the decision behind it, check the result, make a small independent edit, then commit and push a working milestone. Infrastructure files are explained in the first lesson; generated files are identified separately.
