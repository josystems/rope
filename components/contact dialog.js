import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Alert from "./Alert";

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
            <div className='inline-block align-bottom bg-white rounded-lg text-ce overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className=' px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-center'>
                    <Dialog.Title
                      as='h2'
                      className='text-2xl leading-6 font-medium text-gray-900'>
                      Contact Us
                    </Dialog.Title>
                    <div className='mt-2 w-full '>
                      <form
                        className='px-4 pt-6 mb-2 w-full'
                        onSubmit={(e) => submitHandler(e)}>
                        <div className=' mb-4 w-full'>
                          <label
                            className='block text-left text-gray-700 text-sm font-bold mb-2'
                            htmlFor='email'>
                            Email
                          </label>
                          <input
                            className='shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='email'
                            type='email'
                            placeholder='Username'></input>
                          <label
                            className='block text-left text-gray-700 text-sm font-bold mb-2 mt-4'
                            htmlFor='message'>
                            Message
                          </label>
                          <textarea
                            className='shadow-sm h-full resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='message'
                            type='text'
                            rows={4}
                            placeholder='Message'></textarea>
                        </div>
                        <Alert
                          show={status.show}
                          message={status.message}
                          success={status.error === null}
                        />

                        <button
                          type='submit'
                          className='w-1/2  px-4 py-2 text-base font-medium text-blue-900 bg-blue-200 border border-transparent rounded-full hover:bg-blue-400 hover:text-white focus:outline-none '>
                          Send
                        </button>
                      </form>
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
