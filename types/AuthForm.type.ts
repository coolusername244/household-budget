import { ButtonT } from './Button.type';

export type AuthFormItemsT = {
  title: string;
  button: ButtonT;
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
