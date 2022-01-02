import React from "react";
import Image from "next/image";
import img from "../static/image/p3.jpeg";
import img2 from "../static/image/p4.jpeg";
import Link from "next/link";
import FormatDate from "../util/FormatDate";
export default function PostItem({
  id,
  imagePath_ = [img],
  title,
  content,
  createdAt,
}) {
  const _img =
    imagePath_?.length < 5
      ? imagePath_?.slice(1, imagePath_.length)
      : imagePath_?.slice(1, 3);

  return (
    <div
      key={id}
      className='my-6 w-full  pb-4 border border-gray-200 bg-white rounded-lg '>
      {imagePath_?.length > 0 && (
        <Link href={`/post/${id}`}>
          {/* <a
            id='photo_container'
            className='container cursor-pointer flex flex-col justify-evenly items-center'> */}
          <div className='container w-full flex justify-center items-center'>
            <Image src={imagePath_[0]} className='rounded-t-md ' />
          </div>
          {/* <div id='other_photo_container' className='container flex w-full'>
              {_img.map((img) => (
                <div className='basis-full flex justify-center items-center'>
                  <Image src={img} />
                </div>
              ))}
              {imagePath_.length > 4 && (
                <div className='basis-full'>
                  <MorePic size={imagePath_.length - 3} id={id} />
                </div>
              )}
            </div> 
          </a>*/}
        </Link>
      )}
      <div id='post_contant' className='container mt-4 px-6'>
        <Link href={`/post/${id}`}>
          <h1 className='cursor-pointer text-blue-600 font-semibold text-2xl '>
            {title}
          </h1>
        </Link>
        <p className='line-clamp-3 text-ellipsis my-4 text-gray-800'>
          {content + content + content + content + content + content}
        </p>
        <p className='text-right font-semibold text-xs select-none py-2 text-cyan-700'>
          {FormatDate(createdAt,' ',true)}
        </p>
        <Link href={`/post/${id}`}>
          <button className='bg-transparent border  border-blue-600 text-blue-600 hover:text-white block px-3 py-1 rounded-full text-small font-medium hover:bg-blue-600 '>
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

const MorePic = ({ size, id }) => {
  return (
    <Link href={`/api/post/${id}`}>
      <div className='cursor-pointer bg-black opacity-90 hover:opacity-100 flex items-center justify-center h-full text-center rounded-br-md'>
        <h1 className='text-white select-none text-xl'>+ {size}</h1>
      </div>
    </Link>
  );
};
