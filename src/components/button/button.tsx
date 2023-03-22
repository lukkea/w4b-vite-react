import React, { MouseEventHandler } from 'react';

import s from './Button.module.css';

type ButtonType = {
  text: string;
  type: string;
  onClick: MouseEventHandler;
};

const Button = ({ text, type, onClick }: ButtonType) => {
  return (
    <button
      className={`${s.button} ${s[`button-${type}`]}`}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
