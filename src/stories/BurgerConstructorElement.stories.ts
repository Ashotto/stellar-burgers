import type { Meta, StoryObj } from '@storybook/react';
import { BurgerConstructorElementUI } from '@ui';

const meta = {
  title: 'Example/BurgerConstructorElement',
  component: BurgerConstructorElementUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof BurgerConstructorElementUI>;

type Story = StoryObj<typeof meta>;
export default meta;

export const DefaultElement: Story = {
  args: {
    index: 0,
    totalItems: 1,
    ingredient: {
      _id: '111',
      id: '222',
      name: 'Булка',
      type: 'top',
      price: 123,
      calories: 33,
      proteins: 12,
      fat: 33,
      carbohydrates: 22,
      image: '',
      image_mobile: '',
      image_large: ''
    },
    handleClose: () => {},
    handleMoveDown: () => {},
    handleMoveUp: () => {}
  }
};