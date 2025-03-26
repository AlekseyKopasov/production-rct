import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'Pages/MainPage',
  component: MainPage,
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

type Story = StoryObj<typeof MainPage>;

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
