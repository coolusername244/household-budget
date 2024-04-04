'use client';
import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: '/',
        })
      }
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
