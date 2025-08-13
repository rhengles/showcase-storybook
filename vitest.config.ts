import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import solid from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';

const dirname // @ts-ignore
  = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
    plugins: [solid()],
    test: {
        workspace: [
            {
                extends: true,
                plugins: [
                    // The plugin will run tests for the stories defined in your Storybook config
                    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                    storybookTest({
                        configDir: path.join(dirname, '.storybook'),
                    }),
                ],
                test: {
                    name: 'storybook',
                    browser: {
                        // Enable browser-based testing for UI components
                        enabled: true,
                        headless: true,
                        provider: 'playwright',
                        instances: [{ browser: 'chromium' }],
                    },
                    // This setup file applies Storybook project annotations for Vitest
                    // More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
                    setupFiles: ['.storybook/vitest.setup.ts'],
                },
            },
        ],
        // storybook/test: Warning:
        // Starting in Storybook 8.5.0-alpha.18, the "test.include" option in Vitest is discouraged
        // in favor of just using the "stories" field in your Storybook configuration.
        // include: ['stories/**/*.stories.tsx', 'stories/**/*.test.tsx'],
        // exclude: ['stories/**/*.mdx'],
    },
});
