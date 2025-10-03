// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';
import { externalLinkIcon } from './external-link-icon.js';

// https://astro.build/config
export default defineConfig({
  site: "https://JaneliaSciComp.github.io",
  base: "/fileglancer-user-docs",
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
          content: externalLinkIcon,
        },
      ],
    ],
  },
  integrations: [
    starlight({
      title: "Fileglancer User Guide",
      description:
        "Comprehensive documentation for the Fileglancer scientific imaging file browser and sharing platform at Janelia Research Campus.",
      logo: {
        src: "./src/assets/logo.svg",
      },
      favicon: "/favicon.svg",
      customCss: ["./src/styles/global.css", "./src/styles/custom.css"],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              label: "Introduction to Fileglancer",
              slug: "getting-started/introduction",
            },
            { label: "Quick Start Guide", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "Core Workflows",
          items: [
            { label: "Navigating Files", slug: "workflows/navigation" },
            { label: "Creating Data Links", slug: "workflows/data-links" },
            {
              label: "File Conversion Requests",
              slug: "workflows/file-conversion",
            },
          ],
        },
        {
          label: "Features",
          items: [
            { label: "File Browser", slug: "features/file-browser" },
            { label: "Data Sharing", slug: "features/data-sharing" },
            { label: "Data Tools", slug: "features/data-tools" },
          ],
        },
        {
          label: "Help & Support",
          items: [
            { label: "Troubleshooting", slug: "support/troubleshooting" },
            { label: "Getting Help", slug: "support/getting-help" },
          ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});