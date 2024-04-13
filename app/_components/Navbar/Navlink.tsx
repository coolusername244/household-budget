import React, { FC } from 'react';
import Link from 'next/link';
import { NavlinkT } from '@/types/Navlink.type';

const Navlink: FC<NavlinkT> = ({ className, href, text }) => {
  return (
    <Link className={className} href={href}>
      <span className="flex-1">{text}</span>
    </Link>
  );
};

export default Navlink;
