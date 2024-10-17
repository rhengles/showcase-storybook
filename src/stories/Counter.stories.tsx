import type { Meta, StoryObj } from 'storybook-solidjs';
import { expect, within, userEvent } from '@storybook/test';
import CounterComponent from "./Counter";

type Story = StoryObj<typeof CounterComponent>;

const meta: Meta<typeof CounterComponent> = {
	title: "Example/Counter",
	component: CounterComponent,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/solid/writing-docs/docs-page
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/solid/configure/story-layout
		layout: "fullscreen",
		screenshot: {
			viewport: '320x240',
		},
	},
};

export default meta;

export const Counter: Story = {};

export const CounterClick: Story = {
	play: async ({ canvasElement }: { canvasElement: any }) => {
		const canvas = within(canvasElement);

		// See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
		await userEvent.click(canvas.getByTestId('counter')); //getByRole('button')
	
		// 👇 Assert DOM structure
		await expect(
			canvas.getByText(
			'Counter: 2',
			),
		).toBeInTheDocument();
	},
};
