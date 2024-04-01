import React, { FC } from 'react';
import { ButtonT } from '@/types/Button.type';

const Button: FC<ButtonT> = ({ className, text, type }) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
};

export default Button;
