
import { HTMLAttributes } from 'react';
import { CommonComponent } from '../common.models';

export type PhotoSize = 48 | 96;
export interface AuthSSOProps extends CommonComponent, HTMLAttributes<HTMLElement>  {
  onSuccess?: () => void;
  onFail?: () => void;
  paneWidth?: number;
  paneheight?: number;
  position?: Position;
  config?: Config | null | undefined;
}

export enum Position {
  TOP = 'top',
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  LEFT = 'left',
  RIGHT = 'right'
}
export interface Config {
  clientId: string;
  authority?: string;
  postLogoutRedirectUri?: string;
  validateAuthority?: boolean;
  authorityMetadata?: string;
  knownAuthorities?: Array<string>;
  redirectUri?: string;
  navigateToLoginRequestUrl?: boolean;
}