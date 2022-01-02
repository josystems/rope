import React from "react";
import CoreValue from "./CoreValue";

export default function Missoin() {
  return (
    <div
      id='mission'
      className='grid grid-cols-1 gap-4 md:grid-cols-2 bg-cyan-50 p-10 rounded-lg select-none '>
      <div className=' cursor-pointer hover:bg-cyan-300 shadow-2xl transition-all bg-cyan-200 p-10 rounded-lg container'>
        <h1 className='px-3 text-center text-cyan-800 text-3xl font-semibold'>
          Our Mission
        </h1>
        <p className='text-xl pt-2 px-1 '>
          To protect vulnerable children and marginalized communities and
          achieve their full potential for rehabilitation.
        </p>
      </div>
      <div className='cursor-pointer shadow-2xl bg-red-200 hover:bg-red-300 p-10 rounded-lg container'>
        <h1 className='px-3 text-center text-cyan-800 text-3xl font-semibold'>
          Our Vission
        </h1>
        <p className='text-xl pt-2 px-1'>
          To see millions of Children and vulnerable communities attain their
          full capacity, strength and experience aspiring better life
        </p>
      </div>
    </div>
  );
}
