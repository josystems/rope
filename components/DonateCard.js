import Image from "next/image";
import React from "react";
import cbe from "../static/image/cbe.png";
import abay from "../static/image/abay_bank.png";
export default function DonateCard() {
  return (
    <div
      id='to_donate'
      className='select-none py-8 bg-gradient-to-t  from-sky-50/20 via-sky-50/50 to-gray-50/20  w-full mb-8 px-4 md:px-7'>
      <section className='flex justify-center flex-col items-center'>
        <h1 className='text-rose-700 text-center font-bold  text-3xl md:text-4xl'>
          You Can Make a Difference
        </h1>
        <p className='text-gray-700 text-center font-semibold pt-2 text-xl md:text-2xl'>
          Financial donations of any size help to fund our mission
        </p>
        <p className='text-gray-700 px-4 pt-1 pb-4 text-center tracking-wide text-md md:text-lg max-w-screen-lg'>
          Since ROPE is a boarding leading Organization,the source of funding is
          from members of ROPE,private donors,Community Volunteers and
          international Donors.
          <br />
        </p>
      </section>
      <section
        id='bankAccount'
        className='flex flex-wrap gap-4 justify-center items-center'>
        <div className='flex justify-center flex-col items-center'>
          <Image src={cbe} width={80} height={80} />
          <p className='font-semibold'>Commerical Bank of Ethiopia</p>
          <p className='select-text font-semibold text-orange-800'>
            1000436027102
          </p>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <Image src={abay} height={80} width={160} />
          <p className='font-semibold '>Abay Bank</p>
          <p className='select-text font-semibold text-cyan-800'>
            4602117596874012
          </p>
        </div>
      </section>
    </div>
  );
}
