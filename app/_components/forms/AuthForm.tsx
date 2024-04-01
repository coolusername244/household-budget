import Link from 'next/link';
import React, { FC } from 'react';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Button from '@/Button';
import { AuthFormItemsT } from '@/types/AuthForm.type';

const AuthForm: FC<AuthFormItemsT> = ({ title, button, inputs, message }) => {
  return (
    <div className="bg-dark text-white rounded-lg w-[80%] md:w-[50%] xl:w-[40%] py-12 flex flex-col">
      <h1 className="text-4xl mb-6 font-semibold">{title}</h1>
      <form className="w-[80%] mx-auto mb-6 space-y-6 ">
        {inputs.map((input, i) => (
          <div key={i}>
            <label className="text-left block text-sm pb-1" htmlFor={input.id}>
              {input.label}
            </label>
            <input
              type={input.type}
              name={input.name}
              id={input.id}
              placeholder={input.placeholder}
              required={input.required}
              className="w-full rounded-md text-black p-1 indent-1"
            />
          </div>
        ))}
        <Button
          type={button.type}
          text={button.text}
          className={button.className}
        />
        <p className="text-sm text-white">
          {message.text}{' '}
          <Link
            href={message.link.href}
            className="text-tertiary hover:underline"
          >
            {message.link.text}
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

export default AuthForm;
