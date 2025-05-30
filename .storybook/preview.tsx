import type { Preview } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ padding: 20, width: 'fit-content' }}>
          <Story />
        </div>
      </BrowserRouter>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;