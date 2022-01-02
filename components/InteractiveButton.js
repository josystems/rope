import React from "react";
export default function ({
  state,
  name = "SUBMIT",
  cls = "",
  disable,
  ncls,
  lcls,
  scls,
  ecls,
}) {
  const { error, success, loading } = state;
  const successClass =
    scls ||
    "bg-green-600 hover:bg-green-500 cursor-pointer inline-flex flex-row justify-start";
  const errorClass =
    ecls ||
    "bg-red-600 hover:bg-red-500 cursor-pointer justify-start inline-flex flex-row";
  const loadingClass =
    lcls ||
    "cursor-not-allowed justify-start inline-flex flex-row bg-cyan-900 hover:bg-cyan-700";
  const normalClass =
    ncls ||
    "cursor-pointer inline-flex flex-row justify-center bg-cyan-900 hover:bg-cyan-700";
  return (
    <button
      type='submit'
      class={`${
        error
          ? errorClass
          : success
          ? successClass
          : loading
          ? loadingClass
          : normalClass
      } ${cls} items-center rounded-full px-6 py-2 font-semibold leading-6 tracking-wide text-sm shadow-md text-white transition ease-in-out duration-150`}
      disabled={loading || disable}>
      {loading && (
        <svg
          class='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'>
          <circle
            class='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            stroke-width='4'></circle>
          <path
            class='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
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
            fill='#efe'
            d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'></path>
        </svg>
      )}
      {error && (
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
            fill='#fee'
            d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'></path>
        </svg>
      )}
      {error ? error : success ? success : loading ? "Please wait..." : name}
    </button>
  );
}
