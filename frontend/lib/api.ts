const BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export async function searchMovies(query: string, page = 1) {
  const res = await fetch(`${BASE}/movies/search?q=${query}&page=${page}`);
  if (!res.ok) throw new Error('Search failed');
  return res.json();
}

export async function getFavorites() {
  const res = await fetch(`${BASE}/favorites`);
  if (!res.ok) throw new Error('Failed to fetch favorites');
  return res.json();
}

export async function addFavorite(movie: Movie) {
  const res = await fetch(`${BASE}/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie),
  });
  return res.json();
}

export async function removeFavorite(imdbID: string) {
  const res = await fetch(`${BASE}/favorites/${imdbID}`, { method: 'DELETE' });
  return res.json();
}
