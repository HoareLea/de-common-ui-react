// Generated with util/create-component.js
import React from "react";
import { BoxComponent, Avatar as EgAvatar } from 'evergreen-ui';
import { AvatarProps } from "./Avatar.types";
import { getSize } from "../utils";
import "./Avatar.scss";

const Avatar: React.FC<AvatarProps> = (props) => {
  const { fullName, size, ...rest } = props;
  const height = size ? getSize(size) : getSize('md');
  const restBoxProps = rest as BoxComponent;
  return (
    <EgAvatar data-testid="Avatar" size={ height } { ...restBoxProps } name={ fullName }/>
  )
}

export default Avatar;
