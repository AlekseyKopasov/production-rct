import type { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator: Decorator = (Story, { parameters }) => {
  const theme = parameters.theme || Theme.LIGHT;

  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
