# /handoff/

Companion files for `DESIGN_HANDOFF.md` (at the project root).

| File | Purpose |
|---|---|
| `tokens.css` | Drop-in plain CSS — color tokens (light + dark), base layer, custom utility classes (`smallcaps`, `dateline`, `ink-link`, `rule-hair`, `dropcap`, `prose-measure`). Import once from your Astro root layout. |
| `Sidebar.astro.txt` | Astro translation sketch of the sidebar component. Rename to `Sidebar.astro` when copying into your Astro project. |
| `Footer.astro.txt` | Astro translation sketch of the footer with the dark mode toggle. Rename to `Footer.astro`. |
| `claude-prompt.md` | Paste-ready prompt to give Claude Code (or Codex) inside your Astro repo. |

**Why `.txt`?** So Astro's build doesn't try to compile these reference sketches if you accidentally copy the whole folder into `src/`. Rename to `.astro` once you've placed them.

Start with `DESIGN_HANDOFF.md` at the project root — it explains the mechanics (parallel repo vs. file copy), the design intent, and the acceptance checklist.
