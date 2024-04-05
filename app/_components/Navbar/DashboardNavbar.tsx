import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { dashboardLinks } from './constants';
import Navlink from '@/app/_components/Navbar/Navlink';
import SignOutButton from '@/Buttons/SignOutButton';
import { authOptions } from '@/lib/auth';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  const { firstName, email } = session!.user;
  const username = firstName || email!.split('@')[0];

  return (
    <nav className="dashboard-nav">
      <h1 className="">Welcome, {username}!</h1>
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
