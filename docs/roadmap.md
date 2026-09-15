# Rebuild roadmap

## What we inspected

The local reference is `C:\Users\hp\Desktop\EssyCodeLab\Repo\butter-canvas-dream`, at commit `d0cd591` when inspected on 15 September 2026. It has a pre-existing change to `src/routeTree.gen.ts`; the audit did not edit it.

The source uses TanStack Start with Vite, React 19, Tailwind CSS 4, Framer Motion, and Lucide icons. It contains five routes:

| Existing URL | Next.js page file |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/blog` | `src/app/blog/page.tsx` |
| `/tools-and-templates` | `src/app/tools-and-templates/page.tsx` |
| `/product-lab` | `src/app/product-lab/page.tsx` |
| `/courses` | `src/app/courses/page.tsx` |

The homepage assembles navigation, hero, resource cards, about, promise, cases, contact band, and footer, plus a preloader. Its fonts are Hanken Grotesk and Instrument Serif. The maximum homepage width is 1440px. We will measure the reference at matching desktop and mobile viewport sizes before claiming a visual match.

## Asset and behavior findings

- Most photos and illustrations are local files and can be reused when we reach their sections.
- `hero-cover.png.asset.json`, `hero-waves.mp4.asset.json`, and `product-lab-cover.jpg.asset.json` contain Lovable asset references. They are not the underlying media. Recover and verify any referenced media we need from the live Lovable site.
- The hero includes image cycling, animated words, and a smiley/hand animation.
- Navigation includes a resource dropdown and mobile menu.
- Project cards use sticky positioning, which can break if an ancestor has the wrong overflow setting.
- Some footer links use `#` placeholders. Decide their real destinations before deployment.
- Inspect newsletter behavior and resource actions before treating them as working features; page appearance alone does not establish a backend integration.

## Small, reviewable milestones

Progress: milestone 0 is complete locally. Milestone 1 now contains the original fonts, static hero geometry, and navigation with native disclosure controls. The hero background still needs its original media. Milestone 2 will refine mobile behavior, including closing menus after choosing an item and on Escape; the basic narrow-screen layout already exists. Animation and visual comparison with the live reference remain later steps.

| Step | Deliverable | Main lesson | Suggested commit |
| --- | --- | --- | --- |
| 0 | Running Next.js foundation | Files, components, JSX, styles, Git | `chore: initialize Next.js learning foundation` |
| 1 | Fonts, colors, desktop navigation, static hero | Semantic HTML, spacing, reusable components | `feat: recreate navigation and hero layout` |
| 2 | Mobile navigation and responsive hero | Breakpoints, state, keyboard access | `feat: add responsive navigation and hero` |
| 3 | Resource cards and about section | Grid, props, data-driven rendering | `feat: build resources and about sections` |
| 4 | Promise and project sections | Composition, sticky positioning, imagery | `feat: build promise and project sections` |
| 5 | Contact band and footer | Links, forms, accessible controls | `feat: build contact and footer sections` |
| 6 | Four supporting pages | File-based routing and shared layouts | Separate working commit for each page |
| 7 | Motion and interaction parity | Effects, cleanup, reduced motion | Separate working commit for each interaction |
| 8 | Visual comparison and release checks | Matching viewports, loading, metadata, performance | `fix: resolve visual and accessibility differences` |
| 9 | Deployment and domain | Production builds, hosting, DNS, rollback | `docs: record deployment and release checks` |

Each step ends with a runnable result, a line-by-line explanation, a small learner exercise, and a checked commit. Pace depends on understanding and the complexity of the section.

## How the frameworks map

React supplies the components in both projects. Next.js replaces the framework plumbing: routing, document layout, metadata, and the development/build commands. Tailwind supplies styling utilities. We can preserve the visual design while changing that plumbing.

Next.js pages and layouts default to Server Components. Browser interactions need a Client Component boundary, marked with `"use client"`. We will place that boundary around interactive components as needed. A static headline does not need browser state.

References: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components).
