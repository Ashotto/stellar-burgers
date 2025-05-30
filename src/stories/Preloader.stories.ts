import { Preloader } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Preloader',
  component: Preloader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Preloader>;

export const DefaultPreloader: Story = {
  args: {}
};

type Story = StoryObj<typeof meta>;
export default meta;