import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://pfxamd.github.io',
  base: '/sania-rent-car',
  output: 'static',
  outDir: './docs',
  build: { format: 'directory' },
  integrations: [preact()]
});
