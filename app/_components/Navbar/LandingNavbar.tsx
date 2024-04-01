import React from 'react';
import { landingLinks } from './constants';
import Navlink from '@/app/_components/Navbar/Navlink';

const LandingNavbar = () => {
  return (
    <nav className="landing-nav">
      <ul className="landing-nav-list">
        {landingLinks.map((link, i) => (
          <li key={i}>
            <Navlink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LandingNavbar;
