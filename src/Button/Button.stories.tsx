import React from 'react';
import { Preview, Props } from '@storybook/addon-docs/blocks';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { getSize } from './Button';
import { ButtonProps } from './Button.types';

// a function to apply some computation
const someFunction = (appearance) => {
  return appearance
  // makes some computations and returns something
};

export default {
  title: 'Components/Button',
  component: Button,
  /* argTypes: {
    appearance: {
      control: {
        type: 'select',
        default: 'primary',
        options: [
          'primary',
          'minimal'
        ],
      },
    }
  }, */
};

export const Default: Story<ButtonProps> = ({ appearance, ...rest }) => {
  const someFunctionResult = someFunction(appearance);
  return <Button appearance={someFunctionResult} {...rest}>Primary button</Button>;
};





/* export const Primary = () => <Button appearance='primary' intent='success'>Primary button</Button>;
Primary.args = { children: 'warning' };

export const Minimal = () => <Button appearance='minimal' intent='warning' size='lg'>Minimal button</Button>;
Minimal.args = { children: 'warning' }; */



{/* <Meta title='Test' />

Here's some _markdown_!

# Preview

<Preview>
  <Story name='button'>
    <Button>hello</Button>
  </Story>
</Preview>

# Props

<Props of={Button} /> */}