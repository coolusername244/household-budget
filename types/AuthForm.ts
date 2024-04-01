export type AuthFormItems = {
  title: string;
  buttonText: string;
  message: {
    text: string;
    link: {
      text: string;
      href: string;
    };
  };
  inputs: {
    required: boolean;
    label: string;
    type: string;
    name: string;
    id: string;
    placeholder: string;
  }[];
};
