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
│   │   └── writing/     # Blog posts as Markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro          # Home page
│       ├── reading.astro        # Books page (217 books, filterable by genre)
│       ├── interests.astro      # Interests/collections (filterable sections)
│       ├── following.astro      # Blogs, podcasts, newsletters
│       ├── work.astro           # Projects page
│       └── writing/
│           ├── index.astro      # Writing list
│           └── [slug].astro     # Individual post template
└── package.json
```

## Pages & Features

### Home (`/`)
- Shows up to 5 most recent blog posts
- Dynamically pulls from writing folder
- Clean, minimal introduction

### Dark Mode
- **Theme toggle** in header navigation with sun/moon icons
- **System preference detection**: Automatically matches your OS theme
- **Manual override**: Click toggle to switch themes
- **Persistent**: Your preference is saved to localStorage
- Warm color palette for comfortable reading in both modes

### Reading (`/reading`)
- **217 books** organized by genre (Fantasy, Sci-Fi, Non-Fiction, Other Favorites)
- **Filterable navigation**: Click genres to show only that category
- Compact list format with inline author names
- Links to [Goodreads profile](https://www.goodreads.com/devashish_097)

### Interests (`/interests`)
- **Filterable sections**: Swiss Knives & EDC, Wallets, Watches, Fountain Pens, Coffee
- Click navigation to show individual sections
- Links to products/references
- Personal notes on each collection

### Following (`/following`)
- Blogs, podcasts, and newsletters I follow
- Organized by media type
- Links to sources

### Writing (`/writing`)
- Blog posts and essays with Markdown support
- **Footnotes support**: GitHub Flavored Markdown footnotes
- Sorted by date (newest first)
- Individual post pages with formatted content

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

### Adding Sources to Following

Edit `src/pages/following.astro` and add to podcasts, blogs, or newsletters:

```javascript
{
  name: "Source Name",
  author: "Author/Host",
  description: "What they cover",
  url: "https://example.com",
  favorite: true
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
  --color-bg: #fafaf9;
  --color-text: #1c1917;
  --color-text-muted: #78716c;
  --color-border: #e7e5e4;
  --font-body: 'Source Serif 4', Georgia, serif;
  --font-heading: 'DM Sans', system-ui, sans-serif;
}

/* Dark mode */
[data-theme="dark"] {
  --color-bg: #1c1917;
  --color-text: #fafaf9;
  --color-text-muted: #a8a29e;
  --color-border: #44403c;
  --color-link: #fafaf9;
  --color-link-hover: #d6d3d1;
}
```

### Social Media Links

The footer contains social media icons that appear on every page:
- **GitHub:** [https://github.com/deva-097](https://github.com/deva-097)
- **LinkedIn:** [https://www.linkedin.com/in/devashish-bansal](https://www.linkedin.com/in/devashish-bansal)
- **Goodreads:** [https://www.goodreads.com/devashish_097](https://www.goodreads.com/devashish_097)

To update these links, edit the footer section in `src/layouts/BaseLayout.astro`.

### Adding New Sections

1. Create a new `.astro` file in `src/pages/`
2. Add a link in the navigation in `BaseLayout.astro`

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
- Active state indication on navigation links
- Shows all content when no filter is selected

## Working with Claude Code

This site is designed to be easily modified with Claude Code. You can ask it to:

- "Add a new book to the Fantasy section"
- "Add a new interest category"
- "Update the Following page with new podcasts"
- "Adjust the dark mode colors"
- "Add filtering to another page"
- "Create a new blog post about [topic]"
- "Add footnotes to an existing post"

Claude Code can read and modify all the files in this project.

---

Built with Astro • Inspired by personal sites everywhere
