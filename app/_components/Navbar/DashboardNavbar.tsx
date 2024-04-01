import React from 'react';
import { dashboardLinks, bottomLinks } from './constants';
import Button from '@/Button';

const Navbar = () => {
  return (
    <nav className="dashboard-nav">
      <h1 className="">Welcome, Username!</h1>
      <ul className="flex-1 pt-6">
        {dashboardLinks.map((link, i) => (
          <li key={i} className="pt-6">
            <Button {...link} />
          </li>
        ))}
      </ul>
      <ul className="flex justify-between p-6">
        {bottomLinks.map((link, i) => (
          <li key={i}>
            <Button {...link} />
          </li>
        ))}
        {/* <li>
          <Link href={'/'}>Sign Out</Link>
        </li>
        <li>
          <Link href={'/settings'}>Settings</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
