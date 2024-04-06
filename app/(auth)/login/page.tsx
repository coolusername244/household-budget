'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginFormDataT } from '@/types/LoginFormData.type';
import { loginInputs } from '../constants';
import Link from 'next/link';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { signIn } from 'next-auth/react';
import CallToAction from '@/app/_components/Buttons/CallToAction';

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [formData, setFormData] = useState<LoginFormDataT>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const signInResponse = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (signInResponse?.error === 'CredentialsSignin') {
      setLoading(false);
      setSubmissionError('Incorrect email or password. Please try again.');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="bg-dark text-white rounded-lg w-[80%] md:w-[50%] xl:w-[40%] py-12 flex flex-col">
      <h1 className="text-4xl mb-6 font-semibold">Login</h1>
      <form onSubmit={handleSubmit} className="w-[80%] mx-auto mb-6 space-y-6">
        {loginInputs.map((input, i) => (
          <div key={i}>
            <label className="text-left block text-sm pb-1" htmlFor={input.id}>
              {input.label}{' '}
            </label>
            <input
              type={input.type}
              name={input.name}
              id={input.id}
              placeholder={input.placeholder}
              onChange={handleChange}
              className="w-full border-secondary border-2 rounded-md text-black p-1 indent-1"
            />
          </div>
        ))}
        {submissionError && (
          <p className="text-red-500 text-sm pt-3">{submissionError}</p>
        )}
        <CallToAction type="submit" text={loading ? 'Loading...' : 'Sign In'} />
        <p className="text-sm text-white">
          Don&apos;t have an account?{' '}
          <Link href={'/register'} className="text-tertiary hover:underline">
            Sign up
          </Link>
        </p>
      </form>
      <hr className="w-[80%] h-px self-center bg-main border-none mb-6" />
      <div className="flex justify-evenly w-[80%] mx-auto">
        <button
          className="social-button"
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default Login;
