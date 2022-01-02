import React from "react";
import Typewriter from "typewriter-effect";
import { Link as Links } from "react-scroll";
export default function Hero() {
  return (
    <div className=' bg-gradient-to-t fromg mt-1 justify-center w-full md:pt-4  md:px-7 h-screen'>
      <div
        style={{ backgroundImage: "url(/static/image/p2.jpeg)", height: "90%" }}
        className='flex bg-cyan-800 bg-blend-multiply items-center flex-col justify-center md:rounded-2xl  w-full'>
        <p className='text-white/90 text-5xl md:text-6xl px-6 mt-10 select-none max-w-screen-lg font-semibold tracking-wide'>
          Strives to achieve better future for children
        </p>
        <div className='h-20'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              changeDelay: 0,
              cursorClassName: "text-cyan-300 text-3xl",
              wrapperClassName:
                "text-white text-2xl font-semibold tracking-wide",
            }}
            onInit={(writter) => {
              writter
                .typeString("SMALL ACTION")
                .deleteAll()
                .pauseFor(300)
                .typeString("<span class='text-3xl text-red-300'>X</span>")
                .pauseFor(300)
                .deleteAll()
                .typeString("LOTS OF PEOPLE")
                .pauseFor(300)
                .deleteAll()
                .typeString("<span class='text-3xl text-green-300'>=</span>")
                .deleteAll()
                .pauseFor(300)
                .typeString(
                  "<span class='text-3xl font-bold text-rose-300'>BIG<span> CHANGE"
                )
                .pauseFor(2000)
                .start();
            }}
          />
        </div>

        <div className='flex-inline flex-wrap mb-4'>
          <Links to='whoweare' smooth>
            <button className='font-medium bg-rose-700 cursor-pointer border-2 border-rose-700 shadow-sm text-white text-sm mx-3 my-2 rounded-full px-4 py-2 hover:bg-red-700 hover:text-white'>
              WHO WE ARE
            </button>
          </Links>
          <span>
            <Links to='programs' smooth>
              <button className='font-medium bg-transparent  border border-white shadow-md text-white text-sm mx-3 rounded-full px-3 py-2 hover:bg-black/20 hover:text-white'>
                WHAT WE DO
              </button>
            </Links>
          </span>
        </div>
      </div>
    </div>
  );
}
