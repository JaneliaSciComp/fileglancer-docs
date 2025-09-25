// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Fileglancer User Guide',
			description: 'Comprehensive documentation for the Fileglancer scientific imaging file browser and sharing platform at Janelia Research Campus.',
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
						{ label: 'Neuroglancer Integration', slug: 'features/neuroglancer' },
						{ label: 'File Permissions', slug: 'features/permissions' },
					],
				},
				{
					label: 'File Formats',
					items: [
						{ label: 'Supported Formats', slug: 'file-formats/supported-formats' },
						{ label: 'Zarr and OME-Zarr', slug: 'file-formats/zarr' },
						{ label: 'TIFF and OME-TIFF', slug: 'file-formats/tiff' },
					],
				},
				{
					label: 'Help & Support',
					items: [
						{ label: 'Troubleshooting', slug: 'support/troubleshooting' },
						{ label: 'Common Issues', slug: 'support/common-issues' },
						{ label: 'Getting Help', slug: 'support/getting-help' },
					],
				},
			],
		}),
	],
});
