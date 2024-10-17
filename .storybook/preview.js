import { withScreenshot } from 'storycap';

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		screenshot: {
			delay: 8000,
			viewport: '320x320',
		},
	},
	decorators: [
		withScreenshot,
	],
	tags: ["autodocs"],
};

export default preview;
