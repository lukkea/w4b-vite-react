import React, { MouseEventHandler } from 'react';

type ButtonType = {
  text: string;
  type: string;
  onClick: MouseEventHandler;
};

const Button = ({ text, type, onClick }: ButtonType) => {
  return (
    <button className={`button button-${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
