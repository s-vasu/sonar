// Summary.stories.tsx
// import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Summary from './Summary';

const meta: Meta<typeof Summary> = {
  title: 'organisms/Summary',
  component: Summary,
  argTypes: {
    termMonths: { control: 'number' },
    contracts: { control: 'number' },
    maxValue: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof Summary>;

export const Default: Story = {
  args: {
    termMonths: 12,
    contracts: 5,
    maxValue: 100,
  },
  parameters: {
    actions: {
      handles: ['change', 'click .resetbtn'],
    },
  },
};
