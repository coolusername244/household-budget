import nextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    firstName: string | null;
    lastName: string | null;
  }
  interface Session {
    user: User & {
      firstName: string | null;
      lastName: string | null;
    };
    token: {
      firstName: string | null;
      lastName: string | null;
    };
  }
}
