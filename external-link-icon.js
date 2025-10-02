/**
 * External link icon for rehype-external-links plugin.
 *
 * This SVG is defined using the hast (Hypertext Abstract Syntax Tree) format,
 * which is the AST format used by rehype plugins. The rehype-external-links
 * plugin expects content to be provided as a hast node, not as raw HTML/SVG markup.
 *
 * The icon uses Starlight's built-in "external" icon design.
 */
export const externalLinkIcon = {
	type: 'element',
	tagName: 'svg',
	properties: {
		width: '1em',
		height: '1em',
		viewBox: '0 0 24 24',
		fill: 'currentColor',
		style: 'display: inline-block; vertical-align: text-bottom; margin-left: 0.25em;'
	},
	children: [
		{
			type: 'element',
			tagName: 'path',
			properties: {
				d: 'M19.33 10.18a1 1 0 0 1-.77 0 1 1 0 0 1-.62-.93l.01-1.83-8.2 8.2a1 1 0 0 1-1.41-1.42l8.2-8.2H14.7a1 1 0 0 1 0-2h4.25a1 1 0 0 1 1 1v4.25a1 1 0 0 1-.62.93Z'
			}
		},
		{
			type: 'element',
			tagName: 'path',
			properties: {
				d: 'M11 4a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4Z'
			}
		}
	]
};
