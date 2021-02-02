import React from "react";
import { Story } from '@storybook/react/types-6-0';
import Avatar from "./Avatar";
import { AvatarProps } from "./Avatar.types";

export default {
  title: "Components/Avatar",
  component: Avatar
};

export const Default: Story<AvatarProps> = (props) => {
  return <Avatar {...props} fullName="Lee Walters"/>;
};
