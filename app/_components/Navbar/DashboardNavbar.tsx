import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { dashboardLinks } from './constants';
import Navlink from '@/app/_components/Navbar/Navlink';
import SignOutButton from '@/Buttons/SignOutButton';
import { authOptions } from '@/lib/auth';
import { MdSettings } from 'react-icons/md';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  const { name, firstName, email } = session!.user;
  const username = firstName || name?.split(' ')[0] || email!.split('@')[0];

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full py-12 bg-dark text-main text-center font-medium">
          <h1 className="text-white text-lg">Welcome, {username}!</h1>
          <ul className="pt-12 space-y-4 flex-1">
            {dashboardLinks.map((link, i) => (
              <li key={i}>
                <Navlink {...link} />
              </li>
            ))}
          </ul>
          <ul className="flex justify-between px-12">
            <li>
              <SignOutButton />
            </li>
            <li>
              <Link className="text-4xl hover:text-white" href={'/settings'}>
                <MdSettings />
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
