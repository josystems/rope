import React from "react";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import placeHolder from "../../static/image/p2.jpeg";
import Image from "next/image";
import FormatDate from "../../util/FormatDate";

export default function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className='w-screen flex justify-center items-center h-screen'>
        <Loader />
      </div>
    );
  } else {
    const { id, title, content, imagePath, createdAt } = post;
    const images = imagePath ? imagePath.split(",") : [placeHolder];
    return (
      <div>
        <Navbar />
        <div className='flex flex-col justify-center items-center'>
          <section id='postHeader'>
            <div className='flex justify-center relative w-full max-h-[90vh]'>
              <Image
                className='rounded-sm'
                layout='intrinsic'
                src={images[0] || placeHolder}
              />
              <div className='absolute bottom-0 py-6 px-6 md:py-10  flex  justify-center w-full bg-gradient-to-t from-black/90 to bg-transparent backdrop-blur-[1px] rounded-sm'>
                <p className='max-w-screen-md w-full text-center md:text-4xl tracking-wide text-white text-3xl rounded-sm font-bold '>
                  {title}
                </p>
              </div>
            </div>
          </section>
          <section id='postContent' className='md:my-6 max-w-screen-lg'>
            <p className='font-semibold pl-6 text-cyan-700 pt-4 uppercase self-start'>
              {FormatDate(createdAt)}
            </p>
            <p
              className='p-6 text-xl tracking-wide '
              dangerouslySetInnerHTML={{ __html: content }}></p>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
export async function getStaticPaths() {
  const posts = null;
  try {
    const res = await fetch("http://localhost:3000/api/post");
    posts = await res.json();
  } catch (e) {}

  const paths =
    posts?.map((post) => ({
      params: { id: post.id.toString() },
    })) || [];

  return {
    paths,
    fallback: true,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  let post = null;
  try {
    const res = await fetch(`http://localhost:3000/api/post/${params.id}`);
    post = await res.json();
    post.title = "Do Christmas different";
    post.content = `<b>Save the Children</b> op shops around the country are bursting at the seams with quality clothes, homewares and items you’ll love and treasure.
 
Over the last couple of months, our shops in NSW and Victoria have been closed in line with lockdown requirements. As our op shops re-open, we’re committed to ensuring staff and customers stay safe and will be complying with all government guidelines regarding density limits, mask wearing, vaccination status and QR code check in.
 
If you’re not near a local store, or want to beat the Christmas rush, our online shop has hundreds of books, games, records and puzzles.We also offer free Australia-wide shipping with any order over $50.

Christmas shopping for all
This Christmas is a great time to think about buying presents from your local op shop. Save the Children’s op shops are carefully curated to offer high quality items – from clothes and homewares to furniture and books.`;
  } catch (e) {
    console.log(e);
  }
  return {
    props: { post },
    revalidate: 1,
  };
}
