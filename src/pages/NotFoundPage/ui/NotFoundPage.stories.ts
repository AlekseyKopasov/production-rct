import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },

  args: { to: '/' },
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
  args: {},
  parameters: {
    theme: 'light', // Передаём тему через параметры
  },
};
export const PrimaryDark: Story = {
  args: {},
  parameters: {
    theme: 'dark', // Передаём тему через параметры
  },
};
