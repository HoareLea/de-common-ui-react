import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import AuthSSO, { AuthProvider }  from '../AuthSSO';
import { AuthSSOProps } from './AuthSSO.types';
import './AuthSSO.scss';

export default {
  title: 'Components/Authenticated/AuthSSO',
  component: AuthSSO,
  argTypes: {}
};

export const Default: Story<AuthSSOProps> = (props) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

    <AuthProvider config={{
        clientId: "c0f989d1-cc78-4e22-b378-79b15be0a8f1",
        authority: "https://login.microsoftonline.com/7350bd16-821e-44cb-ba83-33512ec76499",
        postLogoutRedirectUri: 'http://localhost:6006'
      }}>
      
      <AuthSSO />

    </AuthProvider>

  </div>);
