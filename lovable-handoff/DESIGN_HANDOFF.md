# Design Handoff — "A Notebook in Public"

This document describes the visual system, layout, and components of this Lovable project so another agent (Claude Code, Codex, etc.) can faithfully port it into the Astro site at your existing repo, **without changing your real content, routes, or deploy flow**.

> Companion files in `/handoff/`:
> - `tokens.css` — drop-in CSS (light + dark tokens, base layer, utility classes)
> - `Sidebar.astro.txt` — Astro translation sketch of the sidebar
> - `Footer.astro.txt` — Astro footer with theme toggle (client script)
> - `claude-prompt.md` — paste-ready prompt for Claude Code

---

## 1. How to get this into your Astro repo

You have two viable paths. Pick one.

### Option A — Connect this Lovable project to GitHub (recommended)

1. In Lovable: **Connectors → GitHub → Connect project**. Authorize the Lovable GitHub App, then **Create Repository** (e.g. `devashish-design-source`).
2. On your laptop: `git clone` it next to your existing Astro repo so they sit side by side:
   ```
   ~/code/
     devashish-site/            # your existing Astro repo
     devashish-design-source/   # this Lovable project, freshly cloned
   ```
3. Open Claude Code (or Codex) **inside `devashish-site/`** and tell it the design source repo is at `../devashish-design-source/`. Use the prompt in `handoff/claude-prompt.md`.
4. Bonus: future tweaks here auto-sync to that GitHub repo. You `git pull` and re-run the agent to apply changes.

### Option B — Copy the handoff files only

If you don't want a second repo:

1. Download this project as ZIP from Lovable (or via GitHub once connected) and copy **just** the `DESIGN_HANDOFF.md` file and the `/handoff/` folder into your Astro repo, e.g. at `devashish-site/design-handoff/`.
2. Point Claude Code at that folder.

Option A is better if you expect to iterate on the design here. Option B is fine for a one-shot port.

---

## 2. Aesthetic intent

Literary / editorial. Warm parchment, ink-blue accent, serif headings, sans body. Think *the spine of a personal notebook*, not a SaaS dashboard. No glass-morphism, no gradients, no shadows on UI chrome. Hairline rules instead of borders. Generous whitespace.

---

## 3. Typography

**Fonts** — Fraunces (serif, headings + name) and Inter (sans, body + UI).

Google Fonts link tag (put in your Astro `<head>`):

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600&display=swap"
/>
```

CSS variables (defined in `tokens.css`):
- `--font-serif: "Fraunces", "Cormorant Garamond", "Iowan Old Style", Georgia, serif;`
- `--font-sans: "Inter", "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;`

Body uses `font-feature-settings: "ss01", "kern"`. All headings (`h1–h6`) are serif, weight 500, slightly tightened tracking (`-0.01em`), near-black in light mode and near-white in dark mode (overriding `--foreground` which is a softer charcoal-brown for body copy).

---

## 4. Color tokens

All colors are in **oklch**. Two complete palettes — light (default) and dark (`.dark` class on `<html>`). Full values are in `handoff/tokens.css`. Quick reference:

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--background` | parchment `oklch(.965 .014 80)` | deep ink `oklch(.18 .012 60)` | page bg |
| `--foreground` | charcoal-brown `oklch(.27 .018 50)` | warm off-white `oklch(.92 .012 80)` | body text |
| `--ink` | ink-blue `oklch(.36 .09 255)` | soft blue `oklch(.72 .1 250)` | links, accents, active state |
| `--rule` | warm gray `oklch(.82 .025 68)` | warm dark `oklch(.36 .018 60)` | hairline rules |
| `--muted-foreground` | `oklch(.48 .022 60)` | `oklch(.65 .018 70)` | secondary text |
| `--surface` / `--surface-deep` | slightly warmer paper | slightly lighter ink | cards, hover wells |

**Rule:** never hardcode a color in components. Always use the token via `var(--color-foo)` (or Tailwind utility if your Astro setup keeps Tailwind).

**Subtle paper grain** — body has a 1px radial-gradient dot pattern at 0.025 opacity, sized 3px × 3px. See `tokens.css` `body` rule. Optional but recommended.

**Selection color** — ink-blue at 18% opacity.

---

## 5. Utility classes (custom, beyond Tailwind)

Defined in `tokens.css` `@layer components` (or as plain classes if you don't use Tailwind):

| Class | Purpose |
|---|---|
| `.smallcaps` | Inter, uppercase, 0.14em tracking, 0.72rem, weight 500. Used for nav items, group labels, meta. |
| `.dateline` | Inter, uppercase, 0.16em tracking, 0.68rem, muted color. Used for the date in the sidebar. |
| `.ink-link` | Ink-blue text, underline at 30% opacity ink, 0.2em offset; underline goes solid on hover. The default link style for body prose. |
| `.rule-hair` | 1px top border in `--rule`. |
| `.dropcap` | First-letter drop cap for long-form prose. Serif, 3.6em, ink-blue, floats left. |
| `.prose-measure` | `max-width: 38rem` for readable line length. |
| `.font-serif` / `.font-sans` | Explicit family override. |

---

## 6. Layout architecture

### Desktop (≥ md / 768px)

- **Fixed left sidebar**, 16rem wide (`w-64`), full viewport height, right border = hairline rule.
- **Main column** offset by `pl-64`, contains `<main>` and `<Footer />` stacked (footer is part of normal flow, not fixed).
- Page content is centered within the main column at `max-w-3xl` with `px-6` and generous vertical padding.

### Mobile (< md)

- Sidebar hidden. A **sticky top bar** appears with the site name on the left and a hamburger icon on the right.
- Tapping the hamburger opens a **left drawer** (72 of width) containing the same sidebar contents. Backdrop is `--foreground/20`. Body scroll is locked while open.

### Sidebar contents (top → bottom)

1. **Identity block** — "Devashish Bansal" in serif (clickable home link), italic muted tagline *"a notebook in public"*.
2. **Hairline rule** (12 of width).
3. **Grouped nav** — three groups, each with a small-caps muted label and items beneath:
   - **Words** — Writing, Commonplace, Notes
   - **Things** — Reading, Collections, Gaming
   - **Workshop** — Experiments
4. **Pinned bottom** (uses `mt-auto`):
   - Hairline rule
   - **Dateline** — today's date formatted `DD MMM YYYY` in uppercase (e.g. `18 APR 2026`)
   - **Elsewhere** links — GitHub, Goodreads, Email, RSS — styled as `.ink-link`

**Active nav state**: ink-blue text + a tiny 1.5×1.5 ink-blue square bullet on the left. Inactive: muted text + invisible bullet that fades to 40% opacity on hover. **No background fills.**

### Footer

Below main content. Two-column on desktop:
- Left: italic serif sentence — *"Set in Fraunces and Inter. Built slowly, in spare hours, inspired by henry.codes."* (henry.codes is an `.ink-link` to https://henry.codes/writing/a-website-to-destroy-all-websites/).
- Right: dateline `© {year}` and a smallcaps theme toggle button reading "Light" or "Dark".

---

## 7. Dark mode

- Class strategy: toggling `.dark` on `<html>` flips every token via the `.dark { ... }` block.
- Persistence: `localStorage.theme` = `"light" | "dark"`. On load, read it and apply the class before paint.
- Toggle UI: a small smallcaps button in the footer that says the *opposite* of the current mode (when in light, it reads "Dark").

In Astro, the toggle is a small client-only `<script>` (see `handoff/Footer.astro.txt`). To avoid a flash of wrong theme on first paint, also drop a tiny inline script in `<head>` that reads `localStorage.theme` and adds the class **before** the body renders:

```html
<script is:inline>
  const t = localStorage.getItem("theme");
  if (t === "dark") document.documentElement.classList.add("dark");
</script>
```

---

## 8. Component inventory

| Component | What it does | Astro notes |
|---|---|---|
| `Sidebar` | Identity, grouped nav, dateline, elsewhere links, mobile drawer with body-scroll lock | Convert React state (`open`, `date`) to a tiny `<script>` client island. See `handoff/Sidebar.astro.txt`. |
| `Footer` | Italic colophon + © year + theme toggle | Theme toggle is client-side only. See `handoff/Footer.astro.txt`. |
| `SectionLabel` | Smallcaps section header used inside pages | Pure markup — wrap a `<p class="smallcaps">` in a small Astro component. |
| `Masthead` | Earlier top-nav variant — **not used** in current layout | Skip. |

Page routes that exist here (treat as the canonical nav set, but **use your existing Astro page content**): `/`, `/writing`, `/commonplace`, `/notes`, `/reading`, `/collections`, `/gaming`, `/experiments`.

---

## 9. Astro translation rules

When porting from React/TanStack to Astro:

| React/TanStack | Astro |
|---|---|
| `className="..."` | `class="..."` |
| `<Link to="/writing">` | `<a href="/writing">` |
| `activeProps={...}` for active nav | Compare `Astro.url.pathname === "/writing"` and conditionally add the active class + bullet |
| `useState` / `useEffect` | A scoped `<script>` block at the bottom of the `.astro` file (no framework needed for this site) |
| `lucide-react` icons | Inline SVG, or the `astro-icon` package with the `lucide` set |

**Tailwind in Astro**: if you don't already use Tailwind in your Astro repo, you don't need to add it — `tokens.css` works as plain CSS. The current project uses Tailwind v4 utility classes (`flex`, `mt-auto`, `md:pl-64`, etc.). If you skip Tailwind, translate utilities to plain CSS in your global stylesheet. Recommendation: keep things simple and either (a) add Tailwind to Astro, or (b) port the few layout utilities by hand.

---

## 10. Out of scope for the port

- Don't change your existing page **content**, frontmatter, MDX, or routes.
- Don't change your build/deploy (Vercel + GitHub stays as-is).
- Don't replicate the routing structure of this Lovable project — your Astro routes are the source of truth.
- The point of the port is **purely visual**: tokens, typography, sidebar layout, footer, dark mode, utility classes.

---

## 11. Acceptance checklist (give this to Claude Code)

After the port, verify:

- [ ] Light mode renders parchment background, charcoal-brown body text, ink-blue links.
- [ ] `.dark` class on `<html>` flips to deep-ink background, off-white text, soft-blue accents.
- [ ] Theme toggle persists across reloads via `localStorage.theme`, no flash on load.
- [ ] Sidebar is fixed-left at ≥768px, 16rem wide, with grouped nav (Words/Things/Workshop).
- [ ] Active nav item is ink-blue with a small square bullet, not a background fill.
- [ ] Mobile shows sticky top bar + hamburger drawer; body scroll locks while drawer is open.
- [ ] Footer shows italic colophon + dateline + theme toggle.
- [ ] Fraunces loads for headings, Inter for body. No system serif fallback flashing.
- [ ] All hairline rules use `var(--rule)`, never a hardcoded gray.
- [ ] No hardcoded hex/rgb in any component — all colors via tokens.
