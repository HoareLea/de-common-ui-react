// Generated with util/create-component.js
import React from "react";
import { Avatar as EgAvatar } from 'evergreen-ui';
import { AvatarProps } from "./Avatar.types";
import { getSize } from "../utils";
import "./Avatar.scss";

const Avatar: React.FC<AvatarProps> = (props) => {
  const { fullName, size, ...rest } = props;
  const height = size ? getSize(size) : getSize('md');
  return (
    <EgAvatar size={ height } { ...rest } name={ fullName }/>
  )
}

export default Avatar;

