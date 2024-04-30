'use client';
import React, { useState } from 'react';
import BarChart from '@/app/_components/BarChart';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import CallToAction from '@/app/_components/Buttons/CallToAction';

const Income = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleYearBack = () => {
    setYear(prev => prev - 1);
  };

  const handleYearForward = () => {
    setYear(prev => prev + 1);
  };

  const sources = [
    {
      title: 'Salary',
      name: 'salary',
    },
    {
      title: 'Overtime',
      name: 'overtime',
    },
    {
      title: 'Rental Income',
      name: 'rental',
    },
    {
      title: 'Other Income',
      name: 'other',
    },
  ];

  return (
    <>
      <section className="mx-auto w-[80%]">
        <div className="flex justify-center">
          <button onClick={handleYearBack}>
            <FaAngleLeft />
          </button>
          <h2 className="text-black text-center px-2">{year}</h2>
          <button
            onClick={handleYearForward}
            disabled={year === new Date().getFullYear()}
          >
            <FaAngleRight />
          </button>
        </div>
        <BarChart />
      </section>
      <section className="mx-auto w-[60%] mt-12 pb-12">
        <div>
          <form className="bg-dark text-white font-medium p-12">
            <h2 className="text-center pb-12 text-2xl">Record Your Income</h2>
            <div className="grid grid-cols-2 gap-6">
              {sources.map((source, index) => (
                <div className="flex justify-between" key={index}>
                  <label htmlFor={source.name}>{source.title}</label>
                  <input
                    type="number"
                    name={source.name}
                    id={source.name}
                    className="rounded-md indent-2 text-black focus-visible:outline-tertiary"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <CallToAction type={'submit'} text={'Submit'} className={'cta'} />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Income;
