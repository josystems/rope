import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import p2 from "../static/image/p2.jpeg";
import p3 from "../static/image/p3.jpeg";
import p4 from "../static/image/p4.jpeg";
import p5 from "../static/image/p5.jpeg";
import p6 from "../static/image/p6.jpeg";

export default function Carousels() {
  const responsive = {
    mobile: {
      breakpoint: { max: 6000, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      ssr
      autoPlay
      infinite
      autoPlaySpeed={5000}>
      <div className=' flex justify-center items-center'>
        <div className='max-w-screen-lg m-2  '>
          <Image src={p2} className='rounded-md' />
        </div>
      </div>
      <div className='flex justify-center items-center '>
        <div className='max-w-screen-lg m-2'>
          <Image src={p3} className='rounded-md' />
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='max-w-screen-lg m-2'>
          <Image src={p4} className='rounded-md' />
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='max-w-screen-lg m-2'>
          <Image src={p5} className='rounded-md' />
        </div>
      </div>
    </Carousel>
  );
}
