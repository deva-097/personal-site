# Personal Site

A minimal personal website built with [Astro](https://astro.build).

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

### Reading (`/reading`)
- **217 books** organized by genre (Fantasy, Sci-Fi, Literary Fiction, Thriller, Non-Fiction, YA)
- **Filterable navigation**: Click genres to show only that category
- Favorites marked with ⭐
- Series counts, ratings, and notes

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
- Blog posts and essays
- Placeholder view when no posts exist

## Adding Content

### New Blog Post

Create a new `.md` file in `src/content/writing/`:

```markdown
---
title: "Your Post Title"
slug: "your-post-slug"
date: "2026-01-15"
description: "Brief description"
---

Your content here...
```

### Adding Books

Edit `src/pages/reading.astro` and add to the appropriate category in `readingData`:

```javascript
{
  title: "Book Title",
  author: "Author Name",
  rating: 5,
  favorite: true,
  notes: "Optional notes"
}
```

### Adding Interests

Edit `src/pages/interests.astro` and add items to the relevant section:

```javascript
{
  name: "Item Name",
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

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Astro—just click Deploy

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Custom Domain

After deploying, you can add a custom domain in your hosting provider's dashboard. Both Vercel and Netlify offer free SSL certificates.

## Customization

### Colors & Fonts

Edit the CSS variables in `src/layouts/BaseLayout.astro`:

```css
:root {
  --color-bg: #fafaf9;
  --color-text: #1c1917;
  --color-text-muted: #78716c;
  --color-border: #e7e5e4;
  --font-body: 'Source Serif 4', Georgia, serif;
  --font-heading: 'DM Sans', system-ui, sans-serif;
}
```

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
- "Change the color scheme to dark mode"
- "Add filtering to another page"

Claude Code can read and modify all the files in this project.

---

Built with Astro • Inspired by personal sites everywhere
