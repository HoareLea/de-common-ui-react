// Generated with util/create-component.js
import React from "react";
import { Checkbox as EgCheckbox } from 'evergreen-ui';
import { CheckboxProps } from "./Checkbox.types";

import "./Checkbox.scss";

const Checkbox: React.FC<CheckboxProps> = (props) => (
    <EgCheckbox data-testid="Checkbox" { ...props } label="My checkbox" />
);

export default Checkbox;

