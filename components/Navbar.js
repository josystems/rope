import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, ScrollLink } from "react-scroll";
import logo from "../public/logo.png";
import Image from "next/image";
import ContactUs from "./DonatePopUp";
import NLink from "next/link";
import Router, { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [donateModal, toggleDonateModal] = useState(false);
  const handleToggle = () => {
    toggleDonateModal(!donateModal);
  };

  return (
    <div>
      <nav className=' shadow-sm bg-transparent block w-full z-10'>
        <div className='w-full'>
          <div className='flex items-center h-16 w-full'>
            <div className='flex items-center mx-8 md:mx-20  justify-between w-full'>
              <div className='flex cursor-pointer justify-center items-center flex-shrink-0 '>
                <NLink className='' href={"/"}>
                  <Image src={logo} height={100} width={174} />
                </NLink>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <NavLink href='/' title='Home' />
                  <NavLink href='/about' title='About' />
                  <NavLink href='/contact' title='Contact' />
                  {router.pathname !== "/" && (
                    <button
                      onClick={handleToggle}
                      className='cursor-pointer bg-blue-600 text-white hover:text-white block px-4 py-2 rounded-full text-base font-medium hover:bg-blue-500 '>
                      Donate
                    </button>
                  )}
                  {router.pathname === "/" && (
                    <Link
                      delay={200}
                      smooth
                      to='to_donate'
                      className='cursor-pointer bg-blue-600 text-white hover:text-white block px-4 py-2 rounded-full text-base font-medium hover:bg-blue-500 '>
                      <p>Donate</p>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className='mr-10 flex md:hidden '>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-700  hover:bg-gray-100 focus:outline-none focus:ring-gray-200 '
                aria-controls='mobile-menu'
                aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-in duration-100 transform'
          enterFrom='opacity-0 translate-30'
          enterTo='opacity-100 translate-100'
          leave='transition ease-out duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          {(ref) => (
            <div className='md:hidden' id='mobile-menu'>
              <div
                ref={ref}
                className='bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <NavLink href='/' title='Home' />
                <NavLink href='/about' title='About' />
                <NavLink href='/contact' title='Contact' />
                {router.pathname !== "/" && (
                  <button
                    onClick={handleToggle}
                    className='cursor-pointer hover:bg-blue-600 text-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                    Donate
                  </button>
                )}
                {router.pathname === "/" && (
                  <Link
                    delay={200}
                    smooth
                    to='to_donate'
                    className='cursor-pointer hover:bg-blue-600 text-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                    <p>Donate</p>
                  </Link>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <ContactUs show={donateModal} toggle={handleToggle} />
    </div>
  );
}
const NavLink = ({ href, activeClass, to, title, onClick }) => {
  return (
    <NLink
      href={href}
      className='cursor-pointer hover:text-blue-600 text-black block px-3 py-2 rounded-md text-base font-medium'>
      <a className='cursor-pointer hover:text-blue-600 text-black block px-3 py-2 rounded-md text-base font-medium'>
        {title}
      </a>
    </NLink>
  );
};

export default Navbar;
