// TooltipIcon.js

import React from 'react';
import { FaApple } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';


const TooltipIcon = () => {
  return (
    <div>
      <h1>Tooltip Icon Example</h1>
      <div data-tip="This is a tooltip" data-for="apple">
        <FaApple size={40} style={{ margin: '10px' }} />
      </div>

      <Tooltip id="apple" place="top" effect="solid">
        This is a tooltip
      </Tooltip>
    </div>
  );
};

export default TooltipIcon;
