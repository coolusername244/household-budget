import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  return <main>Hello there {session?.user.email}</main>;
};

export default Dashboard;
