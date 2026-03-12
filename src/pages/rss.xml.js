import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = import.meta.glob('../content/writing/*.md', { eager: true });
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const items = Object.values(posts)
    .filter((post) => new Date(post.frontmatter.date) <= today)
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    .map((post) => ({
      title: post.frontmatter.title,
      pubDate: new Date(post.frontmatter.date),
      description: post.frontmatter.description || '',
      link: `/writing/${post.frontmatter.slug}/`,
    }));

  return rss({
    title: 'Devashish Bansal',
    description: 'Essays and thoughts on various topics.',
    site: context.site,
    items,
  });
}
