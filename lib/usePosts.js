import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export function usePosts(page = 0) {
  const { data, error } = useSWR([`/api/post?page=${page}`], fetcher);
  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export function usePost(id) {
  const { data, error } = useSWR(`/api/post/${id}`, fetcher);
  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
}
