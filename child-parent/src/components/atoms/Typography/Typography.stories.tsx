import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TypographyTheme from './TypographyTheme';

export default {
  title: 'atoms/TypographyTheme',
  component: TypographyTheme,
  argTypes: {
    id: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
          'subtitle1', 'subtitle2', 'body1', 'body2', 'overline', 'inherit'
        ],
      },
    },
    children: {
      control: 'text',
    },
  },
} as Meta<typeof TypographyTheme>;

const Template: StoryObj<typeof TypographyTheme> = {
  render: (args) => <TypographyTheme {...args} />,
};

export const DefaultTypography = {
  ...Template,
  args: {
    id: 'default-typography',
    text: 'Default Typography',
    variant: 'body1',
  },
};

export const CustomTypography = {
  ...Template,
  args: {
    id: 'custom-typography',
    text: 'Custom Typography',
    variant: 'h1',
    children: ' - with additional content',
  },
};
