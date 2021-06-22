import React, { useState, useEffect, HTMLAttributes } from 'react';
import { Config } from "./AuthSSO.types";
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useAccount } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../authConfig";
import Button from '../Button';

export interface AuthProviderProps extends HTMLAttributes<HTMLElement> {
  onSuccess?: () => void;
  onFail?: () => void;
  config?: Config | null | undefined;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ config = null, children, ...restPros }) => {
  const msalConfigFromProp = {
    ...msalConfig && msalConfig,
    ...config && { auth: config }
  }
  const msalInstance = new PublicClientApplication(msalConfigFromProp);
  return (
    <MsalProvider instance={msalInstance}>
      { children }
    </MsalProvider>
  )
};
