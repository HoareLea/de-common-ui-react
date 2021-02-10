import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import AuthSSO from './AuthSSO';
import { AuthSSOProps } from './AuthSSO.types';
import './AuthSSO.scss';

export default {
  title: 'Components/Authenticated/AuthSSO',
  component: AuthSSO,
  argTypes: {}
};

export const Default: Story<AuthSSOProps> = (props) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <AuthSSO />
  </div>);
