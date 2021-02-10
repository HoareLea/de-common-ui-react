import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: "c0f989d1-cc78-4e22-b378-79b15be0a8f1",
    authority: "https://login.microsoftonline.com/7350bd16-821e-44cb-ba83-33512ec76499",
    postLogoutRedirectUri: 'http://localhost:6006'
  },
  system: {
    allowRedirectInIframe: true
  }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphEndpoint: "https://graph.microsoft.com/v1.0",
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
  graphMeEndpointBETA: "https://graph.microsoft.com/beta/me",
};
