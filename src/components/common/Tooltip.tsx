import React from 'react';
import './Common.css';

interface TooltipProps {
  text: String;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className='tooltip'>
      {children}
      <span className='tooltip-text'>{text}</span>
    </div>
  );
};
