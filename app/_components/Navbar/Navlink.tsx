import React, { FC } from 'react';
import Link from 'next/link';
import { NavlinkT } from '@/types/Navlink.type';

const Navlink: FC<NavlinkT> = ({ className, href, text }) => {
  return (
    <Link className={className} href={href}>
      {text}
    </Link>
  );
};

export default Navlink;
