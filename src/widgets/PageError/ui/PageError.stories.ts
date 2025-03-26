import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
  title: 'widget/PageError',
  component: PageError,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },

  // args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  args: {},
  parameters: {
    theme: 'light', // Передаём тему через параметры
  },
};
export const Dark: Story = {
  args: {},
  parameters: {
    theme: 'dark', // Передаём тему через параметры
  },
};
