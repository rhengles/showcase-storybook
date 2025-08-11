// @vitest-environment jsdom

import { expect, test } from 'vitest';

// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import { composeStories } from 'storybook-solidjs-vite';

import * as stories from '../stories/Button.stories';

const { Primary } = composeStories(stories);
test('Button snapshot', async () => {
  await Primary.run();
  expect(document.body.firstChild).toMatchSnapshot();
});
