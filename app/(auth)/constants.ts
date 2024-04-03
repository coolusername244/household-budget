export const registerInputs = [
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
    name: 'confirmPassword',
    id: 'confirmPassword',
    required: true,
    placeholder: '••••••••',
  },
];

export const formItems = {
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
