
import React, { useEffect } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Popover from './Popover';
import Button from '../Button';
import { PopoverProps, Position } from './Popover.types';
import './Popover.scss';

export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {}
};

export const Default: Story<PopoverProps> = (props) => {
  // useEffect(() => { }, []); // [] no params = call once only
  return (
    <div style={{ display: 'block', textAlign: 'center', height: '400px', margin: '50vmin auto' }}>
      <Popover
        position={Position.BOTTOM_RIGHT}
        triggerElement={<Button>Show popover</Button>}
        {...props}
        content={({ close }) => (
          <>
          <p>Some content</p>
          <Button onClick={close}>Close</Button>
          </>
        )}
      >
      </Popover>
    </div>
  )
};
