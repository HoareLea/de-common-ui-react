
import React from "react";
import { PaneProps } from "./Pane.types";
import "./Pane.scss";

const Pane: React.FC<PaneProps> = ({ foo }) => (
  <div data-testid="Pane" className="foo-bar">{foo}</div>
);

export default Pane;

