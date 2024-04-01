import React from 'react';
import AuthForm from '@/app/_components/forms/AuthForm';
import { AuthFormItems } from '@/types/AuthForm.type';

const Register = () => {
  const formItems: AuthFormItems = {
    title: 'Register',
    button: {
      text: 'Sign Up',
      className: 'cta-button',
      type: 'submit',
    },
    message: {
      text: 'Already have an account?',
      link: {
        text: 'Sign in',
        href: '/login',
      },
    },
    inputs: [
      {
        label: 'First Name',
        type: 'firstName',
        name: 'firstName',
        id: 'firstName',
        required: false,
        placeholder: 'John',
      },
      {
        label: 'Last Name',
        type: 'lastName',
        name: 'lastName',
        id: 'lastName',
        required: false,
        placeholder: 'Doe',
      },
      {
        label: 'Email*',
        type: 'email',
        name: 'email',
        id: 'email',
        required: true,
        placeholder: 'johndoe@example.com',
      },
      {
        label: 'Password*',
        type: 'password',
        name: 'password',
        id: 'password',
        required: true,
        placeholder: '••••••••',
      },
      {
        label: 'Confirm Password*',
        type: 'password',
        name: 'password',
        id: 'password',
        required: true,
        placeholder: '••••••••',
      },
    ],
  };
  return <AuthForm {...formItems} />;
};

export default Register;
