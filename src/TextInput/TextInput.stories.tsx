
    import React from 'react';
    import { Story } from '@storybook/react/types-6-0';
    import TextInput from './TextInput';
    import { TextInputProps } from './TextInput.types';

    export default {
        title: 'Components/TextInput',
        component: TextInput,
        argTypes: {}
    };

    export const Default: Story<TextInputProps> = (props) => {
      return <TextInput {...props}/>;
    };