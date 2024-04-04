import { ButtonT } from '@/types/Button.type';
import React, { FC } from 'react';

const CallToAction: FC<ButtonT> = ({ text, type }) => {
  return (
    <button type={type} className="cta-button">
      {text}
    </button>
  );
};

export default CallToAction;
