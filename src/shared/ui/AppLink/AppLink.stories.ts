import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
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

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'App Link',
    theme: AppLinkTheme.PRIMARY,
  },
  parameters: {
    theme: 'light', // Передаём тему через параметры
  },
};
export const PrimaryDark: Story = {
  args: {
    children: 'App Link',
    theme: AppLinkTheme.PRIMARY,
  },
  parameters: {
    theme: 'dark', // Передаём тему через параметры
  },
};

export const Secondary: Story = {
  args: {
    children: 'App Link',
    theme: AppLinkTheme.PRIMARY,
  },
  parameters: {
    theme: 'light', // Передаём тему через параметры
  },
};
export const SecondaryDark: Story = {
  args: {
    children: 'App Link',
    theme: AppLinkTheme.SECONDARY,
  },
  parameters: {
    theme: 'dark', // Передаём тему через параметры
  },
};
