
import React from 'react';
import { PopoverProps } from './Popover.types';
import { Pane, Popover as EgPopover } from 'evergreen-ui';
import './Popover.scss';

const defaultWidth: number = 700;
const defaultHeight: number = 240;

const Popover: React.FC<PopoverProps> = ({ children, triggerElement, paneWidth = defaultWidth, paneheight = defaultHeight, ...rest }) => {
  return (
    <EgPopover
      content={
        <Pane
          width={ paneWidth }
          height={ paneheight }
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column">
          { children }
        </Pane>
      }
      { ...rest }>
      { typeof triggerElement !== undefined && <button data-testid="Popover">{ triggerElement }</button> }
    </EgPopover>
  )
};

export default Popover;
