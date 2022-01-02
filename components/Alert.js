import { Transition } from "@headlessui/react";
import React, { useState, useEffect } from "react";

export default function Alert({ message, success, show }) {
  const [isShow, setIsShow] = useState(show);
  console.log(
    "msg",
    message,
    "success ",
    success,
    "show : ",
    show,
    "isShow : ",
    isShow
  );
  useEffect(() => {
    console.count("message and count updated");
    if (show && !isShow) setIsShow(true);
  }, [message, show]);

  return (
    <Transition
      show={isShow}
      enter='transition-opacity duration-75'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'>
      <div
        className={`${
          success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        } rounded-lg py-3 px-6 mb-4 flex text-base-flex items-center w-full`}
        role='alert'>
        {!success && (
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='times-circle'
            className='svg-inline--fa fa-times-circle w-4 h-4 mr-2 fill-current'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'>
            <path
              fill='#e33'
              d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'></path>
          </svg>
        )}
        {success && (
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='check-circle'
            className='svg-inline--fa fa-check-circle w-4 h-4 mr-2 fill-current'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'>
            <path
              fill='#3e3'
              d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'></path>
          </svg>
        )}
        <div className='grow'>{message}</div>

        <button className='flex-none pl-8'>
          <svg
            className='fill-current h-6 w-6 text-gray-500'
            role='button'
            onClick={() => setIsShow(false)}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'>
            <title>Close</title>
            <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
          </svg>
        </button>
      </div>
    </Transition>
  );
}
