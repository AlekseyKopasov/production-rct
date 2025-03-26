import type { Meta, StoryObj } from '@storybook/react';
// import React from 'react';
// import { fn } from '@storybook/test';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>;

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
  parameters: {
    theme: 'light', // Передаём тему через параметры
  },
};
export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
  parameters: {
    theme: 'dark', // Передаём тему через параметры
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
  parameters: {
    theme: 'light', // Передаём тему через параметры
  },
};
export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
  parameters: {
    theme: 'dark', // Передаём тему через параметры
  },
};
