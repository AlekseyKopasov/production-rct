import type { Meta, StoryObj } from '@storybook/react';
import { Loader, LoaderTheme } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
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

type Story = StoryObj<typeof Loader>;

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
