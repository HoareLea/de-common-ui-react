
import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import RadioGroup from './RadioGroup';
import { RadioGroupProps } from './RadioGroup.types';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup
};

export const Default: Story<RadioGroupProps> = (props) => {
  const [state, setState] = useState({
    options: [
      { label: 'Read-only', value: 'read-only' },
      { label: 'Write', value: 'write' },
      { label: 'Restricted', value: 'restricted' }
    ],
    value: 'restricted'
  });

  return (
    <RadioGroup
      { ...props }
      marginTop={40}
      label="Permissions"
      value={state.value}
      options={state.options}
      onChange={event => setState({ ...state, value: event.target.value })}
    />
  );
}