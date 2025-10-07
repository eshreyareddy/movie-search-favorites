'use client';
import { useState } from 'react';
import { useMovies } from '@/hooks/useMovies';
import MovieCard from '@/components/MovieCard';

export default function Page() {
  const [query, setQuery] = useState('');
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useMovies(query);

  const movies = data?.pages.flatMap((p: any) => p.movies) ?? [];

  return (
    <div>
      <input
        type="search"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading && <p>Loading...</p>}

      <div className="grid">
        {movies.length ? (
          movies.map((m: any, idx: number) => (
            <MovieCard key={`${m.imdbID}-${idx}`} movie={m} />
          ))
        ) : (
          query && !isLoading && <p>No movies found.</p>
        )}
      </div>

      {hasNextPage && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button className="btn" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}
