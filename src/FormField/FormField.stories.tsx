
    import React from 'react';
    import { Story } from '@storybook/react/types-6-0';
    import FormField from './FormField';
    import TextInput from '../TextInput';
    import { FormFieldProps } from './FormField.types';

    export default {
        title: 'Components/FormField',
        component: FormField,
        argTypes: {}
    };

    export const Default: Story<FormFieldProps> = (props) => {
      return (
        <FormField {...props} label='Some text field label' labelFor='testField'>
          <TextInput id='testField'></TextInput>
        </FormField>
      );
    };