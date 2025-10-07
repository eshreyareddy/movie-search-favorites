'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { searchMovies } from '@/lib/api';

export function useMovies(query: string) {
  return useInfiniteQuery({
    queryKey: ['movies', query],
    queryFn: ({ pageParam = 1 }) => searchMovies(query, pageParam),
    getNextPageParam: (lastPage, pages = []) => {
      const total = lastPage?.total ?? 0;
      const loaded = pages.flatMap((p) => p.movies || []).length;
      return loaded < total ? pages.length + 1 : undefined;
    },
    enabled: !!query,
    initialPageParam: 1,
  });
}
