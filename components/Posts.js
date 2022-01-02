import React from "react";
import useSWRInfinite from "swr/infinite";
import Loader from "./Loader";
import PostItem from "./PostItem";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const PAGE_SIZE = 2;
const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `/api/post?page=${pageIndex}&limit=${PAGE_SIZE}`; // SWR key
};

export default function Posts() {
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

  const datas = data ? [].concat(...data) : [];
  return (
    <div className='flex justify-center items-center flex-col mb-8'>
      <div
        id='news'
        className='grid max-w-screen-xl md:grid-cols-2 gap-x-16 lg:grid-cols-2'>
        {error && (
          <div>
            Failed to load news.
            <br />
            Please try Again
          </div>
        )}
        {datas?.map((post) => (
          <div className='max-w-sm'>
            <PostItem key={post.id} {...post} />
          </div>
        ))}
      </div>
      {isLoadingInitialData && <Loader />}
      <button
        onClick={() => {
          setSize(size + 1);
        }}
        disabled={isLoadingMore}
        type='button'
        class={`${
          isLoadingMore
            ? "cursor-not-allowed"
            : isReachingEnd
            ? "hidden"
            : "cursor-pointer"
        } ${
          isLoadingInitialData ? "hidden" : "inline-flex"
        } items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-cyan-700 hover:bg-cyan-600 transition ease-in-out duration-150`}>
        {isLoadingMore && (
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
        {isLoadingMore ? "Loading..." : isReachingEnd ? "end" : "See More"}
      </button>
    </div>
  );
}
