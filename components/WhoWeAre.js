import React from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/Link";
export default function WhoWeAre() {
  return (
    <div id='whoweare' className='flex justify-center flex-col w-full'>
      <div
        // style={{ backgroundImage: "url(/static/image/about_bg.png)" }}
        className=' flex bg-cover text-gray-900 bg-blend-multiply bg-gradient-to-b from-sky-50/20 to-gray-50 items-center p-8 flex-col justify-center w-full'>
        <SectionTitle title='Who we are' textClass='text-rose-700' />
        <h1 className='tracking-wide max-w-screen-lg px-2 md:px-4 lg:px-8 text-lg'>
          <b>ROPE </b>(Resilence Opportunity for Everyone) is a A
          <b> child centered</b> indigenous, non-governmental, non-partisan, not
          for profit, professional assembly dedicated to
          <b> protect vulnerable</b> and
          <b> marginalized communities</b> and
          <b> achieve their full potential for rehabilitation</b> through local
          capacity building and innovation transformation
          <p className='mt-4 indent-4'>
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
              <Bold>health</Bold>, <Bold>Nutrition</Bold>,{" "}
              <Bold>Education</Bold>{" "}
              <span className='font-semibold'>
                needs of Childrens and their care givers in Kalu and Dessie
                towns of south wollo zones.
              </span>
            </p>
          </p>
        </h1>

        <Link href='/about'>
          {/* <a className='shadow-sm text-white border border-cyan-600 px-3.5 py-1.5 my-6 rounded-md hover:bg-cyan-600'>
            Find Our More
          </a> */}
          <a className='shadow-sm text-white text-sm font-semibold bg-rose-600 px-3.5 py-2 my-6 rounded-full hover:bg-rose-500'>
            Find Our More
          </a>
        </Link>
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
