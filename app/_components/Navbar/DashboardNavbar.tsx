import React from 'react';
import { dashboardLinks } from './constants';
import Navlink from '@/app/_components/Navbar/Navlink';
import Link from 'next/link';
import SignOutButton from '@/Buttons/SignOutButton';

const Navbar = async () => {
  return (
    <nav className="dashboard-nav">
      <h1 className="">Welcome, Username!</h1>
      <ul className="flex-1 pt-6">
        {dashboardLinks.map((link, i) => (
          <li key={i} className="pt-6">
            <Navlink {...link} />
          </li>
        ))}
      </ul>
      <ul className="flex justify-between p-6">
        <li>
          <SignOutButton />
        </li>
        <li>
          <Link href={'/settings'}>Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
