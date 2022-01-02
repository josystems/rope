import React from "react";
import Image from "next/image";
import missionIcon from "../static/image/vision.png";
import visionIcon from "../static/image/mission.png";
import valueIcon from "../static/image/value.png";

export default function CompanyVision() {
  return (
    <div className='grid md:grid-cols-3 text-gray-700 place-items-stretch justify-center'>
      <ViewCard
        icon={visionIcon}
        title='Vision'
        content={
          "To see millions of Children and vulnerable communities attain their full capacity, strength and experience aspiring better life"
        }
      />
      <ViewCard
        icon={valueIcon}
        title='Core Value'
        content={
          <p>
            Our philosophy is based on two core beliefs <br />
            <p>
              <span className='text-cyan-600 font-semibold'>A. </span>People
              affected by disaster or conflict have the right to life with
              dignity and therefore, the right to assistance
            </p>
            <p className='py-2'>
              <span className='text-cyan-600 font-semibold'>B. </span>All
              possible steps should be taken to alleviate human suffering
              arising out of disaster or conflict.
            </p>
            Achieving Significant and Lasting Impact on the lives of Vulnerable
            Children and communities by pursue of :-
            <ul className='text-lg transition-all text-cyan-700  py-2'>
              <li>
                <Line /> Accountability
              </li>
              <li>
                <Line />
                Collaboration
              </li>
              <li className='cursor-pointer'>
                <Line /> Integrity
              </li>
              <li className='cursor-pointer'>
                <Line />
                Responsive
              </li>
              <li className='cursor-pointer'>
                <Line />
                Local capacity
              </li>
            </ul>
          </p>
        }
      />
      <ViewCard
        icon={missionIcon}
        title='Mission'
        content={
          "To protect vulnerable children and marginalized communities and achieve their full potential for rehabilitation."
        }
      />
    </div>
  );
}

function ViewCard({ icon, title, content }) {
  return (
    <div className='flex flex-col w-fit justify-center items-center m-2'>
      <p className=' flex justify-end w-32'>
        <Image src={icon} />
      </p>
      <div className='bg-white shadow-sm border border-gray-200 -mt-12 pt-16 rounded-lg'>
        <h1 className='text-3xl font-semibold text-center'>{title}</h1>
        <p className='pt-6 pb-14 px-8 text-lg font-semibold text-gray-600 max-w-sm'>
          {content}
        </p>
      </div>
    </div>
  );
}
function Line() {
  return <span className='text-xl text-cyan-600 font-bold'> - </span>;
}
