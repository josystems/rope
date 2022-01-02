import Image from "next/image";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import bg from "../static/image/contact_illustration.png";
import InteractiveButton from "../components/InteractiveButton";
import Router from "next/router";
export default function contact() {
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    const email = e.target?.email?.value;
    const name = e.target?.name?.value;
    const message = e.target?.message?.value;
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!(email && emailValidation.test(email) && message && name))
      setStatus({ error: "Fill the form correctly" });
    else {
      setStatus({ loading: true });
      const result = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, name, email }),
      });
      if (result.ok) {
        setStatus({ success: "Success" });
        setTimeout(() => Router.push("/"), 2000);
      } else setStatus({ error: "Faill to send" });
    }
  };
  return (
    <div className='min-h-screen select-none'>
      <Navbar />
      <div className='flex h-5/6 relative justify-end items-end w-full'>
        <div className='absolute pt-16 '>
          <Image src={bg} />
        </div>
        <div className='flex justify-center items-start flex-col w-full h-full'>
          <div className='container flex-col flex justify-center items-center max-w-screen-sm  h-5/6'>
            <SectionTitle
              containerClass='mt-10'
              title={"CONTACT US"}
              textClass='text-gray-700 font-bold text-3xl'
            />
            <form
              onSubmit={handleSubmit}
              className='backdrop-blur-sm w-full max-w-md px-8  pb-16 rounded-lg'>
              <label
                className='block text-left text-gray-700 text-sm font-bold mb-2'
                htmlFor='email'>
                Email
              </label>
              <input
                className='appearance-none w-full bg-white/60 border border-gray-300 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-cyan-600/50'
                id='email'
                type='email'
                name='email'
                placeholder='example@domain.com'
              />
              <label
                className='block text-left mt-4 text-gray-700 text-sm font-bold mb-2'
                htmlFor='subject'>
                Full Name
              </label>
              <input
                className='appearance-none w-full bg-white/60 border border-gray-300 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-cyan-600/50'
                id='name'
                type='text'
                name='name'
                placeholder='Message subject'
              />
              <label
                className='block text-left text-gray-700 text-sm font-bold mb-2 mt-4'
                htmlFor='message'>
                Message
              </label>
              <textarea
                className='resize-none bg-white/60 border-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-cyan-600/50'
                id='message'
                type='text'
                rows={6}
                name='message'
                placeholder='Type your message'
              />
              <InteractiveButton
                state={status}
                name='SEND'
                cls='mt-2 min-w-[150px]'
                lcls='cursor-not-allowed justify-start inline-flex flex-row bg-gradient-to-l from-rose-600 to-orange-500 transition-colors'
                ncls='cursor-pointer inline-flex flex-row justify-center bg-gradient-to-l from-orange-600 to-rose-500 hover:bg-rose-500'
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
