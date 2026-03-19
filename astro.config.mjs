import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://devashish-bansal.vercel.app',
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
