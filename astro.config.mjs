import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://anishmahapatra.com',
  integrations: [sitemap()],
  compressHTML: true,
});
