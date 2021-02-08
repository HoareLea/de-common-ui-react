
import React, { useState }  from 'react';
import { Story } from '@storybook/react/types-6-0';
import Popover from './Popover';
import { PopoverProps, Position } from './Popover.types';
import Avatar from '../Avatar/Avatar';

import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useAccount } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../authConfig";
import { PageLayout } from './ui';

export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {}
};

export const Default: Story<PopoverProps> = (props) => {
  const msalInstance = new PublicClientApplication(msalConfig);
  // const { instance, accounts } = useMsal();
  /* const account = useAccount(accounts[0] || {});
  const [graphData, setGraphData] = useState(null); */

  const avatarButton: JSX.Element = (<Avatar role="button" fullName="John Smith" aria-pressed="false" />);
  return (
    <MsalProvider instance={msalInstance}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

      <>
        <AuthenticatedTemplate>
          <button onClick={() => msalInstance.logout()} className="ml-auto">Sign Out</button>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <button onClick={() => msalInstance.loginPopup(loginRequest)}>Sign in using Popup</button>
        </UnauthenticatedTemplate>
      </>

        <>
          <AuthenticatedTemplate>
            <Popover
              position={Position.BOTTOM_RIGHT}
              triggerElement={avatarButton}
              {...props}>
              <p>some content</p>
            </Popover>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <h5>Please sign-in to see your profile information.</h5>
          </UnauthenticatedTemplate>
        </>

      </div>
    </MsalProvider >
  )
};


