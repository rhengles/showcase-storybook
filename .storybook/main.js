/** @type { import('storybook-solidjs-vite').StorybookConfig } */
const config = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"storycap",
	],

	framework: {
		name: "storybook-solidjs-vite",
		options: {},
	},

	docs: {}
};
export default config;
