// Generated with util/create-component.js
import React from "react";
import { BoxComponent, Tab as EgTab } from 'evergreen-ui';
import { TabProps } from "./Tab.types";
import "./Tab.scss";

const Tab: React.FC<TabProps> = (props) => {
    const restBoxProps = props as BoxComponent;
    return (
    <EgTab data-testid="Tab" {...restBoxProps}>Default tab</EgTab>
)};

export default Tab;
