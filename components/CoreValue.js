import React from "react";

export default function CoreValue() {
  return (
    <div className='flex bg-sky-50 justify-center w-full'>
      <div className='p-4 m-4 select-none rounded-xl flex justify-center flex-col container  max-w-screen-md shadow-sm'>
        <div className=''>
          <h1 className='text-3xl  mt-6 pl-3 text-cyan-700 font-semibold'>
            Core Values
          </h1>
        </div>
        <div>
          <h1 className='pl-3 pt-4 text-gray-600 text-lg font-bold'>
            # Our philosophy is based on
            <span className='underline underline-offset-2'>
              {" "}
              two core beliefs
            </span>
            :
          </h1>
        </div>
        <div>
          <ul className='list-disc ml-4 list-outside text-xl px-6'>
            <li className='text-cyan-700 py-2  '>
              <span className='text-gray-800'>
                People affected by disaster or conflict have the right to life
                with dignity and, therefore, the right to assistance;
              </span>
            </li>
            <li className='text-cyan-700'>
              <span className='text-gray-800'>
                All possible steps should be taken to alleviate human suffering
                arising out of disaster or conflict. Achieving Significant and
                Lasting Impact on the lives of Vulnerable Children and
                communities by pursue of :-
              </span>
              <div className='flex pl-12'>
                <ul className='text-lg transition-all text-cyan-700  py-2'>
                  <li className='cursor-pointer'> # Accountability</li>
                  <li className='cursor-pointer'> # Collaboration</li>
                  <li className='cursor-pointer'> # Integrity</li>
                  <li className='cursor-pointer'> # Responsive</li>
                  <li className='cursor-pointer'># Local capacity</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
