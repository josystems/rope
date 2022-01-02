import Image from "next/image";
import React, { useState } from "react";
import logo from "../../static/image/logo.png";
export default function index() {
  const [remember, setRemember] = useState(true);
  const loginHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const remember = e.target.remember.value;
    console.log(
      email,
      password,
      remember,
      JSON.stringify({ email, password, remember })
    );
    if (email && password) {
      const req = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          headers: {
            "Content-Type": "application/json",
          },
        },
        body: JSON.stringify({ email, password, remember }),
      });
      const json = await req.json();
      console.log("Api response ", json);
    }
  };
  const rememberHandler = () => {
    setRemember((prev) => !prev);
  };
  return (
    <div className='select-none min-h-screen bg-gray-50 w-full flex justify-center items-center'>
      <div className='flex px-8 flex-col justify-center p-4 shadow-md rounded-lg bg-white items-center'>
        <Image src={logo} />
        <form
          className=' flex max-w-screen-md flex-col gap-1'
          onSubmit={loginHandler}>
          <label className='text-gray-600 font-semibold' htmlFor='email'>
            Email
          </label>
          <input
            className='w-72 text-blue-900 border-2 rounded-md px-6 py-1.5 border-blue-300 focus:outline-cyan-600 '
            name='email'
            type='email'
            placeholder='someone@rope.org'
          />
          <label className='text-gray-600 font-semibold' htmlFor='password'>
            Password
          </label>
          <input
            className='w-full text-blue-900 border-2 rounded-md px-6 py-1.5 border-blue-300 focus:outline-cyan-600 '
            name='password'
            type='password'
            placeholder='********'
          />
          <div className=' flex m-2 gap-4 items-center'>
            <input
              id='remember'
              name='remember'
              className='h-4 w-4 cursor-pointer'
              type='checkbox'
              checked={remember}
              onChange={rememberHandler}
            />
            <label className='text-gray-600 cursor-pointer' for='remember'>
              remember password
            </label>
          </div>

          <input
            className='rounded-md bg-cyan-600 py-2 mb-6 mt-2 font-semibold tracking-wide text-gray-100 hover:bg-cyan-500 cursor-pointer'
            type='submit'
            value='LOGIN'
          />
        </form>
      </div>
    </div>
  );
}
