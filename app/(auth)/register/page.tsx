'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { z } from 'zod';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import Button from '@/Button';
import { registerInputs } from '../constants';
import { RegistrationFormErrorT } from '@/types/RegistrationFormError.type';
import { RegistrationFormDataT } from '@/types/RegistrationFormData';

const registerSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const Register = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [formError, setFormError] = useState<RegistrationFormErrorT>({
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [formData, setFormData] = useState<RegistrationFormDataT>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionError(null);

    const formValues = registerSchema.safeParse(formData);

    if (!formValues.success) {
      const errors = formValues.error.errors;
      const errorsObj: RegistrationFormErrorT = {};
      errors.forEach(error => {
        errorsObj[error.path[0]] = error.message;
      });
      setFormError(errorsObj);
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      setFormError({ email: null, password: null, confirmPassword: null });
      const response = await axios.post('/api/user', formData);
      if (response.status === 201) {
        router.push('/dashboard');
      }
    } catch (error: any) {
      setSubmissionError(error.response.data.error);
    }
  };

  return (
    <div className="bg-dark text-white rounded-lg w-[80%] md:w-[50%] xl:w-[40%] py-12 flex flex-col">
      <h1 className="text-4xl mb-6 font-semibold">Register</h1>
      <form onSubmit={handleSubmit} className="w-[80%] mx-auto mb-6 space-y-6">
        {registerInputs.map((input, i) => (
          <div key={i}>
            <label
              className={`text-left block text-sm pb-1 ${
                formError[input.name] ? 'text-red-500' : ''
              }`}
              htmlFor={input.id}
            >
              {input.label}{' '}
              {formError[input.name] && <span>- {formError[input.name]}</span>}
            </label>
            <input
              type={input.type}
              name={input.name}
              id={input.id}
              placeholder={input.placeholder}
              onChange={handleChange}
              className={`w-full  border-2 rounded-md text-black p-1 indent-1 ${
                formError[input.name] ? 'border-red-500' : 'border-secondary'
              }`}
            />
          </div>
        ))}
        {submissionError && (
          <p className="text-red-500 text-sm pt-3">{submissionError}</p>
        )}
        <Button
          type="submit"
          text={loading ? 'Loading...' : 'Sign Up'}
          className="cta-button"
        />
        <p className="text-sm text-white">
          Already have an account?{' '}
          <Link href={'/login'} className="text-tertiary hover:underline">
            Sign in
          </Link>
        </p>
      </form>
      <hr className="w-[80%] h-px self-center bg-main border-none mb-6" />
      <div className="flex justify-evenly w-[80%] mx-auto">
        <button className="social-button">
          <FaGoogle />
        </button>
        <button className="social-button">
          <FaFacebookF />
        </button>
        <button className="social-button">
          <FaXTwitter />
        </button>
        <button className="social-button">
          <FaLinkedinIn />
        </button>
      </div>
    </div>
  );
};

export default Register;
