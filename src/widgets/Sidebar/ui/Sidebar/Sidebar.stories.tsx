import type { Meta, StoryObj } from '@storybook/react';
// import React from 'react';
// import { fn } from '@storybook/test';

import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
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

type Story = StoryObj<typeof Sidebar>;

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
