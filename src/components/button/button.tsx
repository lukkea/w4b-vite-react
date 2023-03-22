import React, { MouseEventHandler } from 'react';

import './button.css';

type ButtonType = {
  text: string;
  type: string;
  onClick: MouseEventHandler;
};

const Button = ({ text, type, onClick }: ButtonType) => {
  return (
    <button className={`button button-${type}`} onClick={onClick} type="button">
      {text}
    </button>
  );
};

export default Button;
