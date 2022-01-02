import React from "react";
import logo from "../../../static/image/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function dashboard(p) {
  return (
    <div className='h-screen'>
      <NavBar />
      <div className='flex flex-col h-9/10  justify-center items-center'>
        <h1 className='text-3xl font-bold mb-12 text-gray-900'>
          Wellcome Admin
        </h1>
        <Link href='/admin/protected/createPost'>
          <button className='text-gray-700 hover:bg-sky-200 w-80 px-12 py-4 rounded-t-md bg-sky-100'>
            Create new Post
          </button>
        </Link>
        <Link href='/admin/protected/managePost'>
          <button className='w-80 px-12 py-4 hover:bg-sky-200 bg-sky-100'>
            Manage Posts
          </button>
        </Link>
        <Link href='/admin/protected/emailSubscription'>
          <button className='w-80 px-12 py-4 hover:bg-sky-200 rounded-b-md bg-sky-100'>
            Email Subscription
          </button>
        </Link>
      </div>
    </div>
  );
}
const NavBar = () => {
  return (
    <div className='select-none shadow-md w-full px-4 flex items-center h-16'>
      <Link className='flex-grow-0' href='/'>
        <Image
          className='cursor-pointer hover:scale-95 transition-all'
          src={logo}
          height={80}
          width={160}
        />
      </Link>
      <button className='ml-auto mr-6 bg-blue-600 px-4 py-2 text-gray-100 font-semibold text-sm tracking-wider rounded-full hover:bg-blue-500'>
        Logout
      </button>
    </div>
  );
};
