import React from "react";
import Logo from "../public/logo.png";
import memberIcon from "../static/image/donate.png";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
export default function Donate() {
  const underline =
    "underline underline-offset-2 decoration-1 decoration-cyan-600";
  return (
    <div className='w-full text-gray-50 items-center flex justify-center '>
      <div className='mx-8 w-full p-4 max-w-screen-xl flex flex-col justify-center items-center rounded-xl bgop bg-gradient-to-b from-slate-800 to-slate-900'>
        <SectionTitle
          title='Donate'
          containerClass='mt-8 mb-6'
          textClass='text-white'
        />
        <p className='tracking-wide max-w-screen-lg px-2 md:px-4 lg:px-8 text-lg'>
          Currently ROPE is in an incentive stage to{" "}
          <Bold>Start school capacity building</Bold> and{" "}
          <Bold>School Construction</Bold> for providing{" "}
          <Bold> Quality education as a pilot program</Bold> in{" "}
          <b className='font-semibold'>
            South wollo, Northwollo and Waghimra zones{" "}
          </b>
          of Amhara Region.
          <br className='h-20' />
          <p className='indent-4 pt-2'>
            On January 2022,{" "}
            <span className='font-semibold'>
              ROPE will start{" "}
              <Bold>Integrated Child Care and Support(ICCS-I)</Bold> Project
            </span>{" "}
            with a budget allocated 6.5 million birr to fulfill the{" "}
            <Bold>health</Bold>, <Bold>Nutrition</Bold>, <Bold>Education</Bold>{" "}
            <span className='font-semibold'>
              needs of Childrens and their care givers in Kalu and Dessie towns
              of south wollo zones.
            </span>
          </p>{" "}
          ROPE is a boarding leading Organization, the source of funding is from
        </p>
        <ul className='m-3 md:gap-4 gap-1 text-blue-200 text-lg grid md:grid-cols-2 justify-center '>
          <li className='flex gap-2 items-center'>
            <Line /> ROPE members
          </li>
          <li className='flex gap-2 items-center'>
            <Line />
            Private donors
          </li>
          <li className='flex gap-2 items-center'>
            <Line />
            Community Volunteers
          </li>
          <li className='flex gap-2 items-center'>
            <Line />
            International Donors
          </li>
        </ul>
        <p className='tracking-wide font-semibold pt-4 px-2 md:px-4 lg:px-8 text-xl'>
          For your contribution and donation you can access bank accounts.
        </p>
        <div className='inline-flex gap-4 flex-wrap items-center justify-center'>
          <div className='flex flex-col justify-center'>
            <Image src={Logo} />
          </div>
          <div>Abay bank</div>
        </div>
      </div>
    </div>
  );
}

function Line() {
  return <div className='w-1.5 h-1.5 rounded-full bg-cyan-600'></div>;
}
function Bold(props) {
  return (
    <span className='underline underline-offset-2 font-semibold decoration-1 decoration-cyan-600/50'>
      {props.children}
    </span>
  );
}
