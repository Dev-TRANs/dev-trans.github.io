import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://trans.stki.org",
  integrations: [
    tailwind(),
    preact(),
    sitemap({
      filter: (page) => page !== '/discord',
    }),
  ],
  redirects: {
    '/discord': {
      status: 302,
      destination: 'https://discord.com/invite/jnZevNmYRg'
    },
  },
});