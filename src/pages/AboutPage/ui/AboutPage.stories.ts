import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'Pages/AboutPage',
  component: AboutPage,
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

type Story = StoryObj<typeof AboutPage>;

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
