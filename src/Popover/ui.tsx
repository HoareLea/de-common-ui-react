import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

const SignInSignOutButton = () => {
  const { instance } = useMsal();
  return (
    <div>
      <AuthenticatedTemplate>
        <button onClick={() => instance.logout()} className="ml-auto">Sign Out</button>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={() => instance.loginPopup(loginRequest)}>Sign in using Popup</button>
      </UnauthenticatedTemplate>
    </div>
  );
};

export const PageLayout = (props: any) => {
  return (
    <div>
      <a className="navbar-brand" href="/">MS Identity Platform</a>
      <SignInSignOutButton />
    </div>
  );
};