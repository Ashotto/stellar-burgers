import { ProfileMenuUI } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/ProfileMenu',
  component: ProfileMenuUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ProfileMenuUI>;

export const DefaultProfileMenu: Story = {
  args: {
    pathname: '/profile',
    handleLogout: () => {}
  }
};

type Story = StoryObj<typeof meta>;
export default meta;