import React from 'react';
import AuthForm from '@/app/_components/forms/AuthForm';
import { AuthFormItems } from '@/types/AuthForm';

const Login = () => {
  const formItems: AuthFormItems = {
    title: 'Login',
    buttonText: 'Sign In',
    message: {
      text: "Don't have an account yet?",
      link: {
        text: 'Sign up',
        href: '/register',
      },
    },
    inputs: [
      {
        label: 'Email',
        type: 'email',
        name: 'email',
        id: 'email',
        required: true,
        placeholder: 'johndoe@example.com',
      },
      {
        label: 'Password',
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

export default Login;
