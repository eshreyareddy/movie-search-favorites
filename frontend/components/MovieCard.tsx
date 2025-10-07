'use client';
import { Movie } from '@/lib/api';
import { useFavorites } from '@/hooks/useFavorites';

export default function MovieCard({ movie }: { movie: Movie }) {
  const { data: favs, add, remove } = useFavorites();
  const isFav = favs?.some((f: Movie) => f.imdbID === movie.imdbID);

  const toggle = () => {
    if (isFav) remove.mutate(movie.imdbID);
    else add.mutate(movie);
  };

  return (
    <div className="card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.png'}
        alt={movie.Title}
      />
      <div className="content">
        <h4>{movie.Title}</h4>
        <span>{movie.Year}</span>

        {/* ✅ Button aligned to the right */}
        <div className="flex justify-end mt-2">
          <button
            className="btn"
            aria-pressed={isFav}
            onClick={toggle}
          >
            {isFav ? '★ Remove' : '☆ Favorite'}
          </button>
        </div>
      </div>
    </div>
  );
}
