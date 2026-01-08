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
├── src/
│   ├── content/
│   │   └── writing/     # Blog posts as Markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro          # Home page
│       ├── reading.astro        # Books page
│       ├── interests.astro      # Interests/collections
│       ├── work.astro           # Projects page
│       └── writing/
│           ├── index.astro      # Writing list
│           └── [slug].astro     # Individual post template
└── package.json
```

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

Edit `src/pages/reading.astro` and add to the `books` array:

```javascript
{
  title: "Book Title",
  author: "Author Name",
  status: "finished", // or "reading"
  year: 2026,
  notes: "Your thoughts"
}
```

### Adding Interests

Edit `src/pages/interests.astro` and add items to the relevant category.

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

## Working with Claude Code

This site is designed to be easily modified with Claude Code. You can ask it to:

- "Add a new blog post about [topic]"
- "Change the color scheme to dark mode"
- "Add an 'About' page"
- "Add a newsletter signup section"
- "Change the font to something more playful"

Claude Code can read and modify all the files in this project.

---

Built with Astro • Inspired by personal sites everywhere
