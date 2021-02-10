import React, { useState, useEffect } from 'react';
import { AuthSSOProps, Position } from "./AuthSSO.types";
import { Pane, Popover as EgPopover } from 'evergreen-ui';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useAccount } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../authConfig";
import { LogOutIcon, Text, Strong } from 'evergreen-ui';
import Button from '../Button';
import Avatar from '../Avatar/Avatar';
import { getCompleteProfile } from "./AuthSSO.service";
import "./AuthSSO.scss";

const defaultWidth: number = 240;
const defaultHeight: number = 140;
const defaultPosition = Position.BOTTOM_RIGHT;

const ProfileContent: React.FC<AuthSSOProps> = ({ children, ...rest }) => {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    RequestProfileData();
  }, []); // [] no params = call once only

  function RequestProfileData() {
    if (account) {
      instance.acquireTokenSilent({
        ...loginRequest,
        account
      }).then((response) => {
        getCompleteProfile(response.accessToken).then(response => {
          return setGraphData(response);
        });
      });
    };
  }

  return (
    <EgPopover
      position={ defaultPosition }
      data-testid="AuthSSO"
      { ...rest }
      content={({ close }) => (
        <Pane
          width={ defaultWidth }
          minHeight={ defaultHeight }
          display="block"
          padding="20px"
          flexDirection="column">
          <>
              <div className="">
                <Strong>{ account ? account.name : 'unknown' }</Strong>
              </div>
              <div>
                <Text>{ account ? account.username : 'unknown' }</Text>
              </div>
            <Button marginTop={20} iconBefore={LogOutIcon}  onClick={() => { close(); instance.logout(); }}>Sign out</Button>
          </>
        </Pane>
      )}>
      <button><Avatar size="xl" role="button" fullName={ account.name } aria-pressed="false" src={ graphData && graphData.photoUrl } /></button>
    </EgPopover>
  );
};


const AuthSSO: React.FC<AuthSSOProps> = (props) => {
  const msalInstance = new PublicClientApplication(msalConfig);

  return (
    <>
      <MsalProvider instance={msalInstance}>
        <AuthenticatedTemplate>
          <ProfileContent { ...props }/>
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <Button onClick={() => msalInstance.loginPopup(loginRequest)}>Sign in</Button>
        </UnauthenticatedTemplate>

      </MsalProvider >
    </>
  )
};

export default AuthSSO;
