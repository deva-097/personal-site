import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://devashish-bansal.vercel.app',
  markdown: {
    remarkPlugins: [remarkGfm],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
