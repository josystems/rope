import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Alert from "./Alert";
import cbe from "../static/image/cbe.png";
import abay from "../static/image/abay_bank.png";
import Image from "next/image";

export default function ContactUs({ show, toggle }) {
  const [status, setStatus] = useState({
    show: false,
    error: null,
    message: null,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let message = e.target.message.value;
    if (!email || !message) {
      setStatus({
        show: true,
        error: true,
        message: "You should fill the form",
      });
      console.log("error");
    } else {
      setStatus({
        show: true,
        error: null,
        message: "Thankyou for contacting",
      });
      console.log("success");
    }
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        onClose={toggle}>
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
            <div className='inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className=' px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-center'>
                    <div className='select-none py-4 bg-gradient-to-t  from-sky-50/20 via-sky-50/50 to-gray-50/20  w-full mb-8  '>
                      <section className='flex justify-center flex-col items-center'>
                        <h1 className='text-rose-700 text-center font-bold  text-3xl md:text-4xl'>
                          You Can Make a Difference
                        </h1>
                        <p className='text-gray-700 text-center font-semibold pt-2 text-xl md:text-2xl'>
                          Financial donations of any size help to fund our
                          mission
                        </p>
                        <p className='text-gray-700 px-4 pt-1 pb-4 text-center tracking-wide text-md md:text-lg max-w-screen-lg'>
                          Since ROPE is a boarding leading Organization,the
                          source of funding is from members of ROPE,private
                          donors,Community Volunteers and international Donors.
                          <br />
                        </p>
                      </section>
                      <section
                        id='bankAccount'
                        className='flex flex-wrap gap-4 justify-center items-center'>
                        <div className='flex justify-center flex-col items-center'>
                          <Image src={cbe} width={80} height={80} />
                          <p className='font-semibold'>
                            Commerical Bank of Ethiopia
                          </p>
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
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
