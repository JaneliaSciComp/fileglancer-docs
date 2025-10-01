// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://JaneliaSciComp.github.io',
	base: '/fileglancer-user-docs',
	integrations: [
		starlight({
			title: 'Fileglancer User Guide',
			description: 'Comprehensive documentation for the Fileglancer scientific imaging file browser and sharing platform at Janelia Research Campus.',
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction to Fileglancer', slug: 'getting-started/introduction' },
						{ label: 'Quick Start Guide', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Core Workflows',
					items: [
						{ label: 'Navigating Files', slug: 'workflows/navigation' },
						{ label: 'Creating Data Links', slug: 'workflows/data-links' },
						{ label: 'File Conversion Requests', slug: 'workflows/file-conversion' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'File Browser', slug: 'features/file-browser' },
						{ label: 'Data Sharing', slug: 'features/data-sharing' },
						{ label: 'Data Tools', slug: 'features/data-tools' },
					],
				},
				{
					label: 'Help & Support',
					items: [
						{ label: 'Troubleshooting', slug: 'support/troubleshooting' },
						{ label: 'Getting Help', slug: 'support/getting-help' },
					],
				},
			],
		}),
	],
});
