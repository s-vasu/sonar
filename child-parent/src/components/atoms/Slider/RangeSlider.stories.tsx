import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RangeSlider from './RangeSlider';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/RangeSlider',
  component: RangeSlider,
  argTypes: {
    maxValue: {
      control: {
        type: 'number',
      },
    },
    curValue: {
      control: {
        type: 'number',
      },
    },
    val: {
      control: {
        type: 'number',
      },
    },
    handleChange: {
      action: 'handleChange',
    },
  },
} as Meta<typeof RangeSlider>;

const Template: StoryObj<typeof RangeSlider> = {
  render: (args) => <RangeSlider {...args} />,
};

export const DefaultSlider = {
  ...Template,
  args: {
    maxValue: 100,
    curValue: 50,
    val: 50,
    handleChange: action('slider-change'),
  },
};

export const CustomSlider = {
  ...Template,
  args: {
    maxValue: 200,
    curValue: 100,
    val: 100,
    handleChange: action('slider-change'),
  },
};
