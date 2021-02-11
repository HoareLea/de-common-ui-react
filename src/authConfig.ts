import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: undefined
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
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
