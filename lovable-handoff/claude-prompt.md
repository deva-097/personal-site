# Prompt for Claude Code (or Codex)

Open Claude Code **inside your Astro repo** (`devashish-site/`). Make sure the design source is available — either:
- (Option A) cloned at `../devashish-design-source/`, OR
- (Option B) copied into `./design-handoff/` inside this repo.

Then paste this prompt:

---

I want to port a design system into this Astro site without changing any of the existing content, routes, frontmatter, or deploy configuration.

The design is documented in `DESIGN_HANDOFF.md` (located at `../devashish-design-source/DESIGN_HANDOFF.md` if Option A, or `./design-handoff/DESIGN_HANDOFF.md` if Option B). The companion `/handoff/` folder contains:
- `tokens.css` — drop-in CSS with all color tokens (light + dark), base layer, and utility classes
- `Sidebar.astro.txt` — Astro translation of the sidebar component
- `Footer.astro.txt` — Astro translation of the footer with the theme toggle

Please:

1. Read `DESIGN_HANDOFF.md` end-to-end first.
2. Add the Google Fonts `<link>` tag (Fraunces + Inter) to my root layout's `<head>`.
3. Add the inline anti-flash script for dark mode to `<head>` (described in section 7 of the handoff).
4. Add `tokens.css` as my global stylesheet (place it at `src/styles/global.css` or wherever my project convention is) and import it once from the root layout.
5. Create `src/components/Sidebar.astro` and `src/components/Footer.astro` from the `.txt` sketches. Adapt them to my existing component conventions and folder structure.
6. Update my root layout to render `<Sidebar />` + a `<main>` slot + `<Footer />`, with `padding-left: 16rem` on the main wrapper at `≥768px`. Keep all existing page slots and frontmatter intact.
7. Map the sidebar's nav `href`s to **my actual existing routes** — do not invent new routes or rename existing ones. If my route paths differ from the handoff's example list, use mine.
8. Walk through the **acceptance checklist** in section 11 of the handoff and confirm each item, or flag where my existing setup forces a deviation.

Constraints:
- Do not change any content inside my page files.
- Do not modify `astro.config`, deploy config, or env beyond what's strictly necessary to load the global stylesheet.
- Do not introduce new dependencies unless explicitly required (no Tailwind needed — `tokens.css` is plain CSS).
- Keep all colors via CSS variables — never hardcode a hex/rgb in a component.

When done, summarize what you changed, list any deviations from the handoff (and why), and show me the diff for the root layout, the two new components, and `global.css`.
