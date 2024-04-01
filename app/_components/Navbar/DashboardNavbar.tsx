import React from 'react';
import { dashboardLinks, bottomLinks } from './constants';
import Navlink from '@/app/_components/Navbar/Navlink';

const Navbar = () => {
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
        {bottomLinks.map((link, i) => (
          <li key={i}>
            <Navlink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
