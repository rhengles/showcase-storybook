import type { Meta, StoryObj } from "storybook-solidjs";

import { IncompleteIcon, CompleteIcon } from "./icons";

interface CompleteDynamicProps {
	complete?: boolean | undefined;
}
function CompleteDynamic(props: CompleteDynamicProps) {
	return <>{props.complete ? <CompleteIcon /> : <IncompleteIcon />}</>;
}

const parameters = {
	screenshot: {
		fullPage: false,
		clip: {
			x: 0,
			y: 0,
			width: 80,
			height: 80,
		},
	},
};

const meta: Meta<typeof CompleteDynamic> = {
	component: CompleteDynamic,
	parameters,
};

export default meta;

type Story = StoryObj<typeof CompleteDynamic>;

export const Complete: Story = {
	args: {
		complete: true,
	} satisfies CompleteDynamicProps,
	// parameters,
};

export const Incomplete: Story = {
	args: {} satisfies CompleteDynamicProps,
	// parameters,
};
