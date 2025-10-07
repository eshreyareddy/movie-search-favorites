'use client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addFavorite, getFavorites, removeFavorite, Movie } from '@/lib/api';

const LOCAL_KEY = 'favorites-cache';

export function useFavorites() {
  const client = useQueryClient();

  const favoritesQuery = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const local = localStorage.getItem(LOCAL_KEY);
      return local ? JSON.parse(local) : await getFavorites();
    },
  });

  const sync = (list: Movie[]) => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(list));
    client.setQueryData(['favorites'], list);
  };

  const add = useMutation({
    mutationFn: addFavorite,
    onSuccess: (_, movie) => {
      const current = favoritesQuery.data || [];
      const updated = [...current, movie];
      sync(updated);
    },
  });

  const remove = useMutation({
    mutationFn: (id: string) => removeFavorite(id),
    onSuccess: (_, id) => {
      const current = favoritesQuery.data || [];
      const updated = current.filter((m: Movie) => m.imdbID !== id);
      sync(updated);
    },
  });

  return { ...favoritesQuery, add, remove };
}
