# Lesson 1: fonts, components, and the static hero

## The result

We now have the original font families, wordmark, headline layout, collaboration badge, first still images, and calls to action. Desktop and mobile navigation use native HTML disclosure controls. The original hero background is missing from the local source, so exact visual matching is still pending. Supporting pages and homepage anchor destinations also remain unbuilt.

## Learn this first: composition and props

The homepage now assembles two pieces: SiteNav and Hero. A component gives a piece of the interface a clear name. Moving a section into a component helps us reason about it and edit it separately.

Inside Hero, MediaChip is used twice. A **prop** is an input to a component: the reading image and notes image are different inputs to the same frame. If we change the frame’s border radius once, both chips change consistently.

Our components have no custom browser state yet. Native details/summary elements handle opening and closing. Next.js’s Link and Image components still supply their framework behavior; “no custom state” does not mean the whole site sends no JavaScript.

## Product decisions

| Decision | Why it matters | Tradeoff |
| --- | --- | --- |
| Store the original fonts locally | Builds do not depend on a font download; the site serves its own font assets | Font files become part of the repository |
| Reuse the original photos | Preserves the content and crops we are recreating | The image cycling is a later lesson |
| Reuse MediaChip and ResourceLinks | One edit can update multiple places consistently | Inputs and mapping introduce new React concepts |
| Use native disclosure controls first | Functional keyboard activation with less custom code | Hover opening, Escape/outside-click dismissal, and closing after selection still need work |
| Match the static layout before motion | Makes spacing and font differences easier to inspect | The original animated entrance and smiley reel are pending |

## Read the code in this order

Start with the page, then layout and styles, then Hero, navigation, and icons. Each table explains every line at this milestone. Blank lines and closing punctuation are listed too, so you can follow the source without guessing.

## src/app/page.tsx

[Open the file](../src/app/page.tsx)

| Line | Explanation |
| --- | --- |
| 1 | Imports our named Hero component. The @/ alias means src/. |
| 2 | Imports our named SiteNav component. |
| 3 | Blank line separating related pieces of code. |
| 4 | Exports the homepage function as this route file’s default component. |
| 5 | Begins the JSX returned by the page. |
| 6 | Centers the page wrapper, fills available width, limits it to the original 1440px, and uses the backdrop color. min-h-screen provides at least a viewport of height. |
| 7 | Creates a skip link targeting the main content. sr-only hides it visually until focus; positioning and z-50 let keyboard users see it above the page. |
| 8 | Supplies the visible and accessible text of the skip link. |
| 9 | Closes the a element. |
| 10 | Renders the navigation component. The slash means this component has no nested children. |
| 11 | Marks the main content and supplies the skip link’s target. tabIndex={-1} makes it focusable as a target without adding it to the normal Tab order. |
| 12 | Renders the hero inside the main content. |
| 13 | Closes the main element. |
| 14 | Closes the div element. |
| 15 | Closes the returned JSX expression and ends the statement. |
| 16 | Closes the function body. |

## src/app/layout.tsx

[Open the file](../src/app/layout.tsx)

| Line | Explanation |
| --- | --- |
| 1 | Imports Next.js’s Metadata type for checking the metadata object. |
| 2 | Imports ReactNode, the type for content React can render. |
| 3 | Imports Next.js’s local font loader. |
| 4 | Loads global CSS for the application. |
| 5 | Blank line separating related pieces of code. |
| 6 | Calls the font loader and stores its generated class names and font settings. |
| 7 | Points to the original Hanken Grotesk variable font saved in our project. The path is relative to this file. |
| 8 | Names the CSS variable that will expose this font family. |
| 9 | Declares the font file’s supported weight range, from 100 through 900. |
| 10 | Uses font-display: swap, allowing fallback text to appear while the font loads. |
| 11 | Closes the font options object and the localFont call. |
| 12 | Blank line separating related pieces of code. |
| 13 | Creates the second font configuration for the wordmark and later serif text. |
| 14 | Starts an array containing the separate font faces. |
| 15 | Registers Instrument Serif’s regular face at weight 400. |
| 16 | Registers the genuine italic face at weight 400 rather than relying on simulated italics. |
| 17 | Closes the font-face array. |
| 18 | Names the CSS variable for Instrument Serif. |
| 19 | Uses swap behavior for this family too. |
| 20 | Closes the second font configuration and loader call. |
| 21 | Blank line separating related pieces of code. |
| 22 | Exports the metadata object and checks its shape with the Metadata type. |
| 23 | Sets the browser-tab title. |
| 24 | Sets the page description available to search engines. |
| 25 | Closes the object and ends its declaration. |
| 26 | Blank line separating related pieces of code. |
| 27 | Exports the shared layout. Destructuring extracts children; the type annotation specifies renderable content. |
| 28 | Begins the layout’s returned JSX. |
| 29 | Declares English and attaches both generated font-variable classes. Backticks form a template string; each ${...} inserts a JavaScript value. |
| 30 | Places the current page content inside the document body. |
| 31 | Closes the html element. |
| 32 | Closes the returned JSX expression and ends the statement. |
| 33 | Closes the function body. |

## src/app/globals.css

[Open the file](../src/app/globals.css)

| Line | Explanation |
| --- | --- |
| 1 | Loads Tailwind CSS. |
| 2 | Blank line separating related pieces of code. |
| 3 | Begins shared theme values that also create Tailwind utilities. |
| 4 | Defines the original near-white backdrop. |
| 5 | Defines the original near-black ink. |
| 6 | Defines the original sage green. |
| 7 | Defines white card surfaces, including the badge and dropdown. |
| 8 | Closes the CSS block. |
| 9 | Blank line separating related pieces of code. |
| 10 | Begins font mappings. inline makes font utilities use these underlying font-variable expressions. |
| 11 | Maps the sans-serif theme family to Hanken Grotesk and fallback fonts. |
| 12 | Maps the serif theme family to Instrument Serif and fallback fonts. |
| 13 | Closes the CSS block. |
| 14 | Blank line separating related pieces of code. |
| 15 | Starts a CSS rule for the document body. |
| 16 | Uses the backdrop variable as the page background. |
| 17 | Uses ink as the inherited text color. |
| 18 | Applies the shared sans-serif font stack to the body. |
| 19 | Requests antialiased font rendering on engines that support this vendor-specific property, matching the source styling. |
| 20 | Closes the CSS block. |
| 21 | Blank line separating related pieces of code. |
| 22 | Selects the summary labels inside native details controls. |
| 23 | Removes their default list marker so our chevron can supply the visual indicator. |
| 24 | Displays a pointer cursor over a summary control. |
| 25 | Closes the CSS block. |
| 26 | Blank line separating related pieces of code. |
| 27 | Targets the disclosure marker in WebKit-based browsers. |
| 28 | Hides that marker to avoid displaying both a native triangle and our icon. |
| 29 | Closes the CSS block. |
| 30 | Blank line separating related pieces of code. |
| 31 | Selects links and summaries when the browser determines a visible focus indication is appropriate, commonly during keyboard use. |
| 32 | Draws a solid 2px ink outline around the focused control. |
| 33 | Separates the outline from the control by 4px. |
| 34 | Closes the CSS block. |

## src/components/hero.tsx

[Open the file](../src/components/hero.tsx)

| Line | Explanation |
| --- | --- |
| 1 | Imports Next.js’s Image component and the type representing statically imported image metadata. |
| 2 | Imports the original reading photo. The import supplies image data, including dimensions and a generated URL. |
| 3 | Imports the original notes photo. |
| 4 | Imports the small shared SVG icon component. |
| 5 | Blank line separating related pieces of code. |
| 6 | Defines a reusable MediaChip. Its image prop must have the StaticImageData shape. |
| 7 | Begins the image chip’s returned JSX. |
| 8 | Creates an inline, rounded image frame. relative anchors the image; overflow-hidden clips it. It is 68×41px on narrow screens and 72×44px from md upward. The 6px side margins, border, alignment, and shadow come from the reference. |
| 9 | Fills that frame with the supplied image. sizes tells the browser the displayed width for selecting an image resource. object-cover crops to fill the shape. Empty alt marks this decorative photo as having no spoken description. |
| 10 | Closes the span element. |
| 11 | Closes the returned JSX expression and ends the statement. |
| 12 | Closes the function body. |
| 13 | Blank line separating related pieces of code. |
| 14 | Exports the Hero function for the homepage to import. |
| 15 | Begins the hero’s returned JSX. |
| 16 | Creates a named section, using the heading’s ID for its accessible name. It has 16px side padding and 64px vertical padding on narrow screens; at md it uses 24px above and 144px below. |
| 17 | Centers the hero content in a 1024px maximum width and centers its text. |
| 18 | Creates a decorative 40px circular smiley holder. grid and place-items-center center its contents. aria-hidden removes decoration from the accessibility tree. |
| 19 | Starts a scalable vector drawing with a 44×44 internal coordinate system, displayed at 24×24px. |
| 20 | Draws the left eye: a filled circle centered at coordinates 16,18 with radius 2.4. |
| 21 | Draws the right eye at 28,18 with the same radius. |
| 22 | Draws the curved smile using an SVG path, an unfilled stroke, and rounded line ends. M moves to a point; c defines a relative cubic curve. |
| 23 | Closes the svg element. |
| 24 | Closes the div element. |
| 25 | Adds 20px of separation before the availability badge. |
| 26 | Builds the white pill badge: horizontally aligned contents, 8px gap, rounded border, 12px medium-weight text, and a small shadow. |
| 27 | Adds an 8px decorative sage dot. It stays still in this milestone. |
| 28 | Provides the availability text. |
| 29 | Closes the span element. |
| 30 | Closes the div element. |
| 31 | Creates the primary heading and gives it a complete accessible label so responsive line breaks and decorative chips cannot join spoken words. clamp sets a 32px minimum, a 6vw preferred size, and a 68px maximum. It uses 1.12 line-height and tighter desktop letter spacing. |
| 32 | Groups the first phrase and adds a small margin proportional to its font size on narrow screens. The margin becomes zero at md. |
| 33 | Adds a line break below md, then an explicit space and the words “and the”. JSX {" "} inserts a space intentionally. |
| 34 | Adds a line break only at md and wider. |
| 35 | Renders the reading photo through MediaChip, followed by “stories”. |
| 36 | Breaks the line on narrow screens, inserts a space, then displays “worth”. |
| 37 | Adds the next desktop-only line break. |
| 38 | Reuses MediaChip with the notes photo. Only the prop changes. |
| 39 | Adds the narrow-screen line break before “building.” |
| 40 | Closes the h1 element. |
| 41 | Starts the roles paragraph with 28px of separation, 16px text, and softened ink color. |
| 42 | Displays the three roles and two separator dots. Each dot has 8px side margins and reduced opacity. |
| 43 | Closes the p element. |
| 44 | Lays out the calls to action with Flexbox. flex-wrap permits a second row when they cannot fit; gap-3 leaves 12px between them. |
| 45 | Creates the sage “Start here” link with rounded ends. Its eventual destination is the projects section. group allows its arrow to react to the link’s hover state. |
| 46 | Displays the label and a 15px arrow. On hover the arrow moves 2px to the right. |
| 47 | Closes the a element. |
| 48 | Creates the outlined “Grab a freebie” link pointing to the eventual resources section, with colors changing on hover. |
| 49 | Displays the second label and reuses the same arrow icon. |
| 50 | Closes the a element. |
| 51 | Closes the div element. |
| 52 | Closes the div element. |
| 53 | Closes the section element. |
| 54 | Closes the returned JSX expression and ends the statement. |
| 55 | Closes the function body. |

## src/components/site-nav.tsx

[Open the file](../src/components/site-nav.tsx)

| Line | Explanation |
| --- | --- |
| 1 | Imports Next.js’s Link for navigation within this site. |
| 2 | Imports our shared icon renderer. |
| 3 | Blank line separating related pieces of code. |
| 4 | Starts the list of resource destinations. Keeping content in data avoids repeating it for desktop and mobile. |
| 5 | Stores the Tools & Templates label and route. |
| 6 | Stores the Product Lab label and route. |
| 7 | Stores the Courses & Certifications label and route. |
| 8 | Closes the resource array. |
| 9 | Blank line separating related pieces of code. |
| 10 | Defines the reusable resource-link renderer. |
| 11 | Maps each data item to JSX. The arrow function extracts label and href from the item. |
| 12 | Builds one styled link. key identifies it within the list. prefetch={false} avoids automatically loading a supporting page before it is visited; those pages are not built yet. |
| 13 | Renders that item’s label. |
| 14 | Closes the Link element. |
| 15 | Closes the callback expression, map call, and return statement. |
| 16 | Closes the function body. |
| 17 | Blank line separating related pieces of code. |
| 18 | Exports the navigation component. |
| 19 | Begins its returned JSX. |
| 20 | Creates a positioned header above hero content with z-40. Side/top padding changes from 20/24px to 40/32px at sm. |
| 21 | Places the wordmark, desktop links, and contact/menu group in a row with space between them. |
| 22 | Creates the home link. Instrument Serif, genuine italics, 20px sizing, and close letter spacing reproduce the wordmark. The accessible label clarifies its destination. |
| 23 | Names the main navigation landmark. It is hidden below md, then becomes a horizontal Flexbox row with 32px gaps. |
| 24 | Links Stories to /blog. This supporting route is pending, so automatic prefetching is disabled. |
| 25 | Creates a native details disclosure. The browser stores whether it is open. group allows a child icon to respond to that state, and relative anchors the dropdown. |
| 26 | Creates its summary control, which supports click and native keyboard activation. |
| 27 | Displays Resources and a 14px chevron. The icon rotates 180 degrees when the parent details is open. |
| 28 | Closes the summary element. |
| 29 | Positions the dropdown below its trigger and centers it using left:50% plus translateX(-50%). Top padding supplies a 12px gap. |
| 30 | Styles the white dropdown panel with a 210px minimum width, grid rows, border, round corners, and a shadow. |
| 31 | Inserts the three resource links from the shared data renderer. |
| 32 | Closes the div element. |
| 33 | Closes the div element. |
| 34 | Closes the details element. |
| 35 | Links to the homepage’s planned projects section. |
| 36 | Links to the homepage’s planned about section. |
| 37 | Closes the nav element. |
| 38 | Groups Say hi and the narrow-screen menu control with an 8px gap. |
| 39 | Builds the black contact pill. It points to the planned contact section. |
| 40 | Creates a second native disclosure visible only below md. Its named group prevents its state from being confused with a nested disclosure. |
| 41 | Creates the 40px circular mobile menu control and gives its icon-only label an accessible name. |
| 42 | Shows the menu icon while the mobile disclosure is closed. |
| 43 | Shows the close icon while the mobile disclosure is open. |
| 44 | Closes the summary element. |
| 45 | Creates a separately named mobile navigation panel, positioned below the header with margins matching the current header padding. This milestone uses an overlay panel; the original mobile menu expands the header. |
| 46 | Renders Stories as a generously padded mobile link. |
| 47 | Starts a nested resource disclosure with its own named state group. |
| 48 | Creates its full-row summary control and separates the label from the chevron. |
| 49 | Displays Resources and rotates only this nested disclosure’s chevron when open. |
| 50 | Closes the summary element. |
| 51 | Reuses ResourceLinks inside an indented grid. |
| 52 | Closes the details element. |
| 53 | Renders the mobile projects link. |
| 54 | Renders the mobile about link. |
| 55 | Closes the nav element. |
| 56 | Closes the details element. |
| 57 | Closes the div element. |
| 58 | Closes the div element. |
| 59 | Closes the header element. |
| 60 | Closes the returned JSX expression and ends the statement. |
| 61 | Closes the function body. |

## src/components/icon.tsx

[Open the file](../src/components/icon.tsx)

| Line | Explanation |
| --- | --- |
| 1 | Defines a union type: only these four exact strings are accepted as icon names. The vertical bar means “or” in this TypeScript type. |
| 2 | Blank line separating related pieces of code. |
| 3 | Creates a lookup table. Record<IconName, string> requires a string path for each allowed name. |
| 4 | Stores the arrow drawing. SVG path commands move to coordinates and draw the shaft and arrowhead. |
| 5 | Stores a two-segment downward chevron. |
| 6 | Stores three horizontal lines for the menu icon. |
| 7 | Stores two crossing diagonals for the close icon. |
| 8 | Closes the object and ends its declaration. |
| 9 | Blank line separating related pieces of code. |
| 10 | Exports a reusable icon component. name is required; className is optional (the question mark) and defaults to an empty string. |
| 11 | Begins the returned vector element. |
| 12 | Uses a 24×24 coordinate system with no fill, a 2-unit stroke, and round joins and ends. currentColor inherits the surrounding text color. The icon is decorative because nearby text or a control label explains its purpose. |
| 13 | Looks up the path using the selected name and draws it. |
| 14 | Closes the svg element. |
| 15 | Closes the returned JSX expression and ends the statement. |
| 16 | Closes the function body. |

## How to decode the styling strings

Tailwind classes are individual CSS instructions separated by spaces. You do not need to memorize the entire string. Read it in groups: layout, size, spacing, typography, color, border, then interaction.

| Pattern | Meaning and example |
| --- | --- |
| flex / grid | Layout systems for arranging children; flex-col changes Flexbox’s direction |
| items-center / justify-between | Cross-axis alignment / distributing free space between items |
| inline-block / inline-flex | Keep an element within text flow while allowing a box or flex layout |
| relative / absolute / fixed | Establish a positioning context / position within an ancestor / position against the viewport |
| mx-auto / text-center | Center a constrained box / center inline content inside it |
| px / py / pt / pb / mt / gap | Horizontal padding / vertical padding / top padding / bottom padding / top margin / separation between children |
| Numeric spacing | The default step is 0.25rem: px-4 is 1rem; gap-2 is 0.5rem. With the default 16px root size these are 16px and 8px |
| h / w / min-w / max-w | Height / width / minimum width / maximum width |
| Square brackets | Exact custom values, such as max-w-[1440px] or text-[13px] |
| rounded-full / rounded-2xl | Fully rounded pill ends or circles / a large corner radius |
| border / border-ink/10 | A border / ink border color at 10% opacity |
| bg / text | Background color / text color or size, depending on the value |
| font-medium / font-serif / italic | Weight 500 / serif font family / italic style |
| leading / tracking | Line-height / space between letters |
| shadow-[...] | A custom CSS box shadow; underscores stand for spaces in the arbitrary value |
| overflow-hidden / object-cover | Clip overflowing children / crop an image to fill its frame |
| sm: / md: | Apply from 640px / 768px upward under the default breakpoints |
| hidden md:flex | Hidden below md; flex layout at md and wider |
| hover: / focus: / focus-visible | Apply styles during hovering / focus / visible focus indication |
| group-hover: / group-open: | React to a parent group’s hover / open state |
| group/mobile | A named parent group; group-open/mobile targets that particular group |
| transition-colors / transition-transform | Smooth changes to colors / transforms |
| rotate-180 / translate-x-0.5 | Rotate half a turn / move 0.125rem horizontally |
| z-40 / z-50 | Stacking order within the relevant stacking context |

An **em** depends on the current element’s font size; a **rem** depends on the root font size. **vw** is 1% of the viewport width. This is why the heading can grow smoothly while still obeying minimum and maximum sizes.

## Your exercise: make and explain one change

1. In your VS Code terminal, run npm.cmd run dev and open the address it prints. The production preview does not update automatically after edits; the development server does.
2. Find the resource data array in site-nav.tsx. Change “The Product Lab” to “My Product Lab” and save.
3. Inspect both the desktop dropdown and mobile submenu. Explain why both labels changed after editing one object.
4. Restore the original label before continuing visual matching.
5. In MediaChip, temporarily change rounded-2xl to rounded-full. Predict what changes, check both images, then restore it.

You can now explain a component, a prop, an array rendered with map, a reusable style token, and a responsive breakpoint.

## Known differences and next step

- The live Lovable website address is still needed to recover the original hero cover and perform an actual side-by-side visual comparison. The GitHub repository address supplies code, not the running design.
- The photographs and smiley are still; the availability dot does not pulse.
- The mobile menu currently overlays the hero. The reference expands the header. We will refine that behavior in the next navigation lesson.
- Native disclosures toggle by click or keyboard; they do not yet reproduce the reference’s desktop hover interaction or close automatically after a navigation selection.
- Resource/Stories routes and the projects, resources, about, and contact sections are scheduled for later milestones; their links currently lead to unbuilt destinations.
- No deployment has been performed. GitHub publishing was previously blocked by the workspace credential helper and integration permissions; local checkpoints preserve our progress.

Next: finish the mobile navigation behavior and keyboard dismissal, then build the resource cards and about section.

References: [Next.js fonts](https://nextjs.org/docs/app/api-reference/components/font), [Hanken Grotesk source](https://github.com/google/fonts/tree/main/ofl/hankengrotesk), [Instrument Serif source](https://github.com/google/fonts/tree/main/ofl/instrumentserif).
