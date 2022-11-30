import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    markdown: {
        drafts: true,
        ShikiConfig: {
            theme: 'nord',
            langs: [],
            wrap: true,
        },
    },
    integrations: [tailwind(), mdx({ drafts: true })],
});