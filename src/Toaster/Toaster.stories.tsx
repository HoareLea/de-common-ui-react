
import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import toaster from './Toaster';
import { ToasterProps } from './Toaster.types';
import Button from '../Button';

export default {
  title: 'Components/Toaster',
  component: toaster,
  argTypes: {}
};

export const Default: Story<ToasterProps> = (props) => {
  return (
    <Button onClick={() =>
        toaster.notify(
          'You have updated the schematics'
        )
    }>Notify</Button>
  );
};