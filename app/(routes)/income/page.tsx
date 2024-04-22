'use client';
import React, { useState } from 'react';
import BarChart from '@/app/_components/BarChart';
import { FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

const Income = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleYearBack = () => {
    setYear(prev => prev - 1);
  };

  const handleYearForward = () => {
    setYear(prev => prev + 1);
  };

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
      <section className="mx-auto w-[60%] mt-12">
        <div className="">
          <form className="bg-dark text-white font-medium p-6">
            <h2 className="text-center pb-6 text-2xl">Record Your Income</h2>
            <div className="flex">
              <label htmlFor="income">Salary</label>
              <input type="number" name="income" id="income" />
            </div>
            <div className="flex">
              <label htmlFor="overtime">Overtime</label>
              <input type="number" name="overtime" id="overtime" />
            </div>
            <div className="flex">
              <label htmlFor="rental">Rental Income</label>
              <input type="number" name="rental" id="rental" />
            </div>
            <div className="flex">
              <label htmlFor="other">Other Income</label>
              <input type="number" name="other" id="other" />
            </div>
            <div className="flex justify-center">
              <button className="bg-tertiary text-white py-2 px-6 rounded-full mt-6">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Income;
