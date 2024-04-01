import React from 'react';
import AuthForm from '@/app/_components/forms/AuthForm';
import { AuthFormItemsT } from '@/types/AuthForm.type';

const Login = () => {
  const formItems: AuthFormItemsT = {
    title: 'Login',
    button: {
      text: 'Sign In',
      className: 'cta-button',
      type: 'submit',
    },
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
