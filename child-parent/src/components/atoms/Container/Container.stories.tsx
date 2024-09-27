import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SimpleContainer from './Container';

export default {
  title: 'atoms/SimpleContainer',
  component: SimpleContainer,
  argTypes: {
    children: {
      control: 'text',
    },
  },
} as Meta<typeof SimpleContainer>;

const Template: StoryObj<typeof SimpleContainer> = {
  render: (args) => <SimpleContainer {...args} />,
};

export const DefaultContainer = {
  ...Template,
  args: {
    children: 'This is a simple container',
  },
};

export const CustomContentContainer = {
  ...Template,
  args: {
    children: (
      <div>
        <h1 id="purpletext">Custom Content</h1>
        <p id="greytext">This is some custom content inside the container.</p>
      </div>
    ),
  },
};
