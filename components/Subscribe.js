import React, { useState } from "react";
import Image from "next/image";
import icon from "../static/image/mail_icon.png";
import InteractiveButton from "./InteractiveButton";

export default function Subscribe() {
  const successClass =
    "bg-green-600 hover:bg-green-500 cursor-pointer inline-flex flex-row justify-start";
  const errorClass =
    "bg-red-600 hover:bg-red-500 cursor-pointer justify-start inline-flex flex-row";
  const loadingClass =
    "cursor-not-allowed justify-start inline-flex flex-row bg-cyan-900 hover:bg-cyan-700";
  const normalClass =
    "cursor-pointer inline-flex flex-row justify-center bg-cyan-900 hover:bg-cyan-700";
  const [status, setStatus] = useState({
    error: null,
    success: null,
    loading: false,
  });
  const handleSubscription = async (e) => {
    e.preventDefault();
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = e.target?.email?.value;
    if (!email)
      setStatus({ success: null, error: "Email required! ", loading: false });
    else if (!emailValidation.test(email)) {
      setStatus({
        success: null,
        error: "Invalid Email Format!",
        loading: false,
      });
    } else {
      setStatus({ loading: true });
      const result = await fetch(`/api/newslatter/subscribe?email=${email}`);
      const data = await result.json();
      if (result.ok) {
        setStatus({
          loading: false,
          success: "Subscribed",
          error: null,
        });
      } else
        setStatus({
          loading: false,
          success: null,
          error:
            data?.code === "ER_DUP_ENTRY" ? "Already Subscribed" : data?.code,
        });
    }
  };
  return (
    <div
      // style={{ backgroundImage: "url(/static/image/bg3.png)" }}
      className='bg-content flex bg-gray-50 justify-center'>
      <div className='bg-white/30 rounded-md backdrop-blur-md shadow-lg flex max-w-screen-lg mt-10 -mb-10 justify-center items-center'>
        <div className='flex justify-center  items-center m-10 flex-col'>
          <Image src={icon} width={135} height={83} />
          <h1 className='text-center font-bold text-xl my-4 ml-2 tracking-wider text-cyan-700'>
            SUBSCRIBE
          </h1>

          <p className='text-center pb-8 text-lg font-semibold tracking-wide text-gray-700'>
            Keep up to date with the latest project news, developments, and
            results.
          </p>
          <form
            className='flex flex-col md:flex-row mb-6'
            onSubmit={handleSubscription}>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='focus:outline-cyan-300 placeholder-cyan-900 text-md tracking-wider text-gray-700 border-none rounded-full bg-cyan-500/30 py-2 px-8 md:mx-4'
            />
            <span className='mt-4'></span>
            <InteractiveButton state={status} />
          </form>
        </div>
      </div>
    </div>
  );
}
