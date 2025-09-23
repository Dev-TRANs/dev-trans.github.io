import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), sitemap()],
  site: "https://trans.stki.org",
  redirects: {
      '/discord': {
        status: 302,
        destination: 'https://discord.com/invite/jnZevNmYRg'
      },
  }
});
