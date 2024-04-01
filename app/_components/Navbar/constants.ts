import { Button } from '@/types/button';

export const dashboardLinks: Button[] = [
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

export const landingLinks: Button[] = [
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

export const bottomLinks: Button[] = [
  {
    text: 'Sign Out',
    href: '/',
  },
  {
    text: 'Settings',
    href: '/settings',
  },
];
