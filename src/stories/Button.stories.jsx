import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
	title: "Example/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
	parameters: {
		screenshot: {
			fullPage: false,
			clip: {
				x: 0,
				y: 0,
				width: 128,
				height: 64,
			},
		},
	},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Primary = {
	args: {
		primary: true,
		label: "Button",
	},
};

export const Secondary = {
	args: {
		label: "Button",
	},
};

export const Large = {
	args: {
		size: "large",
		label: "Button",
	},
};

export const Small = {
	args: {
		size: "small",
		label: "Button",
	},
};
