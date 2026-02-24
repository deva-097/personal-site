# Personal Site

A minimal personal website built with [Astro](https://astro.build).

**Live Site:** [https://devashish-bansal.vercel.app](https://devashish-bansal.vercel.app)
**Repository:** [https://github.com/deva-097/personal-site](https://github.com/deva-097/personal-site)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server runs at `http://localhost:4321`

## Project Structure

```
├── public/              # Static assets (favicon, images)
├── raw_notes/           # Personal notes and drafts (gitignored)
├── src/
│   ├── content/
│   │   ├── writing/       # Blog posts as Markdown files
│   │   └── commonplace/   # Collected poems, quotes, and fragments
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro          # Home page
│       ├── reading.astro        # Books page (filterable by genre)
│       ├── interests.astro      # Interests/collections (filterable sections)
│       ├── work.astro           # Projects page
│       ├── writing/
│       │   ├── index.astro      # Writing list
│       │   └── [slug].astro     # Individual post template
│       └── commonplace/
│           ├── index.astro      # Commonplace list
│           └── [slug].astro     # Individual piece template
└── package.json
```

## Pages & Features

### Home (`/`)
- Shows up to 5 most recent blog posts
- Dynamically pulls from writing folder
- Clean, minimal introduction

### Dark Mode
- **Theme toggle** in sidebar (desktop) and mobile header
- **System preference detection**: Automatically matches your OS theme
- **Manual override**: Click toggle to switch themes
- **Persistent**: Your preference is saved to localStorage
- Warm color palette for comfortable reading in both modes

### Mobile Navigation
- **Fixed top header** (56px) with site name, theme toggle, and hamburger menu
- **Slide-down nav menu** with active page highlighting and social links
- Sidebar hidden on mobile, replaced by the mobile header/menu

### Active Navigation
- Current page is highlighted in the sidebar (desktop) and mobile menu
- Uses `startsWith()` matching for sub-pages (e.g., `/writing/post-slug` highlights "Writing")

### Reading (`/reading`)
- Books organized by genre (Fantasy, Sci-Fi, Non-Fiction, Other Favorites)
- **Pill/tag filter buttons**: Click genres to filter by category
- Hover backgrounds on book items
- Links to [Goodreads profile](https://www.goodreads.com/devashish_097)

### Interests (`/interests`)
- **Pill/tag filter buttons**: Swiss Knives & EDC, Wallets, Watches, Fountain Pens, Coffee
- Hover backgrounds on individual items
- Links to products/references
- Personal notes on each collection

### Writing (`/writing`)
- Blog posts and essays with Markdown support
- **Footnotes support**: GitHub Flavored Markdown footnotes
- Hover backgrounds on post list
- Individual post pages with formatted content

### Commonplace (`/commonplace`)
- Collected poems, quotes, and fragments
- Hover backgrounds on piece list
- Individual piece pages with author attribution

## Design

### Color Palette
- **Background**: `#faf8f5` (warm cream)
- **Text**: `#292524` (soft dark)
- **Accent**: `#b45309` (warm amber) — used in blockquotes, selection, focus outlines
- **Surface**: `#f5f0eb` — hover backgrounds and interactive states

### Typography
- **Body**: Source Serif 4 (serif)
- **Headings/UI**: DM Sans (sans-serif)
- **Line height**: 1.75 for comfortable reading

### Key Design Decisions
- Section headers use bottom borders instead of uppercase text
- Prose links have subtle underlines that darken on hover
- List items use hover backgrounds instead of border separators
- Content is optically centered on wide screens via `margin-left: max(220px, calc(50vw - 320px))`
- `::selection` uses warm amber tint
- Blockquote borders use amber accent color

## Adding Content

### New Blog Post

Create a new `.md` file in `src/content/writing/`:

```markdown
---
title: "Your Post Title"
slug: "your-post-slug"
date: "2026-01-15"
description: "Brief description"
tags: ["category"]
---

Your content here...

Add footnotes like this.[^1]

[^1]: This is a footnote that will appear at the bottom of the post.
```

**Footnotes**: Use GitHub Flavored Markdown syntax with `[^1]` in text and `[^1]: Content` at the bottom.

### New Commonplace Piece

Create a new `.md` file in `src/content/commonplace/`:

```markdown
---
title: "Piece Title"
slug: "piece-slug"
date: "2026-01-15"
description: "Brief description"
author: "Author Name"
---

Your content here...
```

### Adding Books

Edit `src/pages/reading.astro` and add to the appropriate category in `readingData`:

```javascript
{
  title: "Book Title",
  author: "Author Name",
  type: "series",  // optional
  count: "3 books",  // optional, for series
  notes: "Optional notes"
}
```

### Adding Interests

Edit `src/pages/interests.astro` and add items to the relevant section:

```javascript
{
  name: "Product Name",
  brand: "Brand Name",
  url: "https://example.com",
  notes: "Optional notes"
}
```

### Adding Images

1. Place images in `public/images/`
2. Reference them in Markdown as `/images/your-image.jpg`

## Deployment

This site is deployed on **Vercel** and automatically deploys on every push to the `main` branch.

### Current Deployment
- **Platform:** Vercel
- **URL:** https://devashish-bansal.vercel.app
- **Auto-deploy:** Enabled (pushes to `main` trigger automatic rebuilds)

### Making Updates

**Quick Deploy (Recommended):**
```bash
./deploy.sh "Your change description"
```

**Manual Deploy:**
```bash
git add .
git commit -m "Your change description"
git push
```

Vercel automatically rebuilds and deploys (takes ~1 minute)

### Adding a Custom Domain

When you're ready to add a custom domain:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → Settings → Domains
3. Add your custom domain (e.g., `devashish.com`)
4. Update DNS settings at your domain registrar (Vercel provides instructions)
5. Free SSL certificate is automatically provisioned

## Customization

### Colors & Fonts

Edit the CSS variables in `src/layouts/BaseLayout.astro`:

```css
/* Light mode */
:root {
  --color-bg: #faf8f5;
  --color-text: #292524;
  --color-text-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #b45309;
  --color-surface: #f5f0eb;
  --font-body: 'Source Serif 4', Georgia, serif;
  --font-heading: 'DM Sans', system-ui, sans-serif;
}

/* Dark mode */
[data-theme="dark"] {
  --color-bg: #1c1917;
  --color-text: #e7e5e4;
  --color-text-muted: #a8a29e;
  --color-border: #44403c;
  --color-surface: #292524;
}
```

### Social Media Links

The sidebar and mobile nav contain social media icons:
- **GitHub:** [https://github.com/deva-097](https://github.com/deva-097)
- **LinkedIn:** [https://www.linkedin.com/in/devashish-bansal](https://www.linkedin.com/in/devashish-bansal)
- **Goodreads:** [https://www.goodreads.com/devashish_097](https://www.goodreads.com/devashish_097)

To update these links, edit the sidebar and mobile nav sections in `src/layouts/BaseLayout.astro`.

### Adding New Sections

1. Create a new `.astro` file in `src/pages/`
2. Add a link in the `navLinks` array in `BaseLayout.astro`

## Development Notes

### Raw Notes Folder

The `raw_notes/` folder contains personal notes and source material used to build the site content:
- Book lists from Goodreads exports
- Hobbies and collection notes
- Other reference materials

This folder is gitignored and won't be committed to version control.

### Filtering Feature

The Reading and Interests pages use client-side JavaScript to filter content by category:
- Uses URL hash navigation (e.g., `/reading#fantasy`)
- Bookmarkable filtered views
- Pill/tag buttons with active state (filled background)
- Shows all content when no filter is selected

---

Built with Astro • Inspired by personal sites everywhere
