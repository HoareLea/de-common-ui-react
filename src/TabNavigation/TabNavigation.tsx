// Generated with util/create-component.js
import React from "react";
import { BoxComponent, TabNavigation as EgTabNavigation } from 'evergreen-ui';
import { TabNavigationProps } from "./TabNavigation.types";

import "./TabNavigation.scss";

const TabNavigation: React.FC<TabNavigationProps> = (props) => {
  const restBoxProps = props as BoxComponent;
  return (
    <EgTabNavigation data-testid="TabNavigation" { ...restBoxProps }></EgTabNavigation>
  )
};

export default TabNavigation;
