import type { Meta, StoryObj } from 'storybook-solidjs'

import { IncompleteIcon, CompleteIcon } from './icons'

interface CompleteDynamicProps {
	complete?: boolean | undefined
}
function CompleteDynamic(props: CompleteDynamicProps) {
	return <>{
		props.complete
		? <CompleteIcon />
		: <IncompleteIcon />
	}</>
}

const meta: Meta<typeof CompleteDynamic> = {
	component: CompleteDynamic,
};

export default meta;

type Story = StoryObj<typeof CompleteDynamic>;

export const Complete: Story = {
	args: {
		complete: true,
	} satisfies CompleteDynamicProps,
};

export const Incomplete: Story = {
	args: {
	} satisfies CompleteDynamicProps,
};
