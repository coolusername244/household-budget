import React, { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/types/button';

const Button: FC<Button> = ({ className, href, text }) => {
  return (
    <Link className={className} href={href}>
      {text}
    </Link>
  );
};

export default Button;
