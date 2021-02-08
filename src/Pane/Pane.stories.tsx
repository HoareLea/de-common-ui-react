
import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Pane from './Pane';
import { PaneProps } from './Pane.types';

export default {
  title: 'Components/Pane',
  component: Pane,
  argTypes: {}
};

export const Default: Story<PaneProps> = (props) => {
  return <Pane {...props}/>;
};