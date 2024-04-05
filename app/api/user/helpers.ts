import prisma from '@/lib/db';

export const checkForExistingUser = async (email: string) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return existingUser;
};

export const createNewUser = async (
  email: string,
  firstName: string,
  lastName: string,
  hashedPassword: string,
) => {
  const response = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: hashedPassword,
    },
  });
  return response;
};
