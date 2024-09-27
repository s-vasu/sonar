import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BasicButton from './BasicButton';
// import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';

export default {
  title: 'atoms/BasicButton',
  component: BasicButton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['text', 'outlined', 'contained'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    className: {
      control: {
        type: 'select',
        options: ['reviewbtn', 'resetbtn'],
      },
    },
  },

  args: { onClick: fn() },
} as Meta<typeof BasicButton>;

const Template: StoryObj<typeof BasicButton> = {
  render: (args) => <BasicButton {...args} />,
};

export const ReviewButton = {
  ...Template,
  args: {
    variant: 'contained',
    text: 'Review',
    size: 'medium',
    className: 'reviewbtn',
    // onClick: action('review-button-click'),
  },
};

export const ResetButton = {
  ...Template,
  args: {
    variant: 'contained',
    text: 'Reset',
    size: 'medium',
    className: 'resetbtn',
    // onClick: action('reset-button-click'),
  },
};
