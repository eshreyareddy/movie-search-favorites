import { Injectable } from '@nestjs/common';

export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

@Injectable()
export class FavoritesService {
  private store = new Map<string, Movie>();

  add(movie: Movie) {
    this.store.set(movie.imdbID, movie);
    return { ok: true };
  }

  remove(imdbID: string) {
    const ok = this.store.delete(imdbID);
    return { ok };
  }

  list(): Movie[] {
    return Array.from(this.store.values());
  }
}
