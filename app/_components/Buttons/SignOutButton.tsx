'use client';
import { signOut } from 'next-auth/react';
import { CiLogout } from 'react-icons/ci';

const SignOutButton = () => {
  return (
    <button
      className="text-4xl hover:text-white"
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: '/',
        })
      }
    >
      <CiLogout />
    </button>
  );
};

export default SignOutButton;
