import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { z } from 'zod';
import { checkForExistingUser, createNewUser } from './helpers';

const CreateUserSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  firstName: z.string(),
  lastName: z.string(),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, firstName, lastName, password } =
      CreateUserSchema.parse(body);

    const existingUser = await checkForExistingUser(email);

    if (existingUser) {
      return NextResponse.json(
        { user: null, error: 'User already exists' },
        { status: 400 },
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await createNewUser(
      email,
      firstName,
      lastName,
      hashedPassword,
    );

    const { password: newUserPassword, ...user } = newUser;

    return NextResponse.json(
      { user: user, message: 'User created successfully' },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ user: null, error: error }, { status: 500 });
  }
}
