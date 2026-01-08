import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yoursite.com', // Update this when you have a domain
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
