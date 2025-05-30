import type { Meta, StoryObj } from '@storybook/react';
import { BurgerConstructorUI } from '@ui';

const meta = {
  title: 'Example/BurgerConstructor',
  component: BurgerConstructorUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof BurgerConstructorUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultConstructor: Story = {
  args: {
    constructorItems: {
      bun: null,
      ingredients: []
    },
    price: 0,
    orderRequest: false,
    orderModalData: null,
    closeOrderModal: () => {},
    onOrderClick: () => {}
  }
};