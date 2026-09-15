# Hello, my world

Essy Udeme's personal website, rebuilt in Next.js while learning frontend development.

## Current milestone: 0 — a working foundation

This is a small starter page with the original headline and colors. The Lovable layout, fonts, images, other pages, and interactions are upcoming milestones. Visual parity has not been assessed yet.

- Reference: https://github.com/onceuponatechie/butter-canvas-dream
- Destination: https://github.com/onceuponatechie/hello-my-world
- Stack: Next.js App Router, React, TypeScript, Tailwind CSS, npm.
- Start the lesson: [Foundation walkthrough](docs/00-foundation.md).
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
