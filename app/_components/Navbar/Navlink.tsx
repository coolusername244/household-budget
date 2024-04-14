'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import { NavlinkT } from '@/types/Navlink.type';
import { usePathname } from 'next/navigation';

const Navlink: FC<NavlinkT> = ({ className, href, text }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${className} ${
        pathname === `/${text.toLowerCase()}` ? 'text-white' : ''
      }`}
      href={href}
    >
      <span className="flex-1">{text}</span>
    </Link>
  );
};

export default Navlink;
