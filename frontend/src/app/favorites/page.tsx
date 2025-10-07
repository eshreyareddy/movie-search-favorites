'use client';
import { useFavorites } from '@/hooks/useFavorites';
import MovieCard from '@/components/MovieCard';

export default function FavoritesPage() {
  const { data, isLoading } = useFavorites();

  return (
    <div>
      <h2>Your Favorites</h2>
      {isLoading && <p>Loading...</p>}
      <div className="grid">
        {data?.length ? (
          data.map((m: any) => <MovieCard key={m.imdbID} movie={m} />)
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
}
