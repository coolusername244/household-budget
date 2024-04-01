import { NavlinkT } from '@/types/Navlink.type';

export const dashboardLinks: NavlinkT[] = [
  {
    text: 'Dashboard',
    href: '/dashboard',
    className: 'nav-item',
  },
  {
    text: 'Income',
    href: '/income',
    className: 'nav-item',
  },
  {
    text: 'Expenses',
    href: '/expenses',
    className: 'nav-item',
  },
  {
    text: 'Savings',
    href: '/savings',
    className: 'nav-item',
  },
];

export const landingLinks: NavlinkT[] = [
  {
    text: 'Register',
    href: '/register',
    className: 'cta-button',
  },
  {
    text: 'Login',
    href: '/login',
    className: 'secondary-button',
  },
];

export const bottomLinks: NavlinkT[] = [
  {
    text: 'Sign Out',
    href: '/',
  },
  {
    text: 'Settings',
    href: '/settings',
  },
];
