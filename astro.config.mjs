import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://timredband.github.io',
    integrations: [tailwind(), mdx()],
    markdown: {
        shikiConfig: {
            theme: 'github-light',
            // Alternatively, provide multiple themes
            // https://github.com/antfu/shikiji#lightdark-dual-themes
        },
    },
});
