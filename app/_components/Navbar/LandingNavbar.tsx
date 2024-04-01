import React from 'react';
import { landingLinks } from './constants';
import Button from '@/Button';

const LandingNavbar = () => {
  return (
    <nav className="landing-nav">
      <ul className="landing-nav-list">
        {landingLinks.map((link, i) => (
          <li key={i}>
            <Button {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LandingNavbar;
