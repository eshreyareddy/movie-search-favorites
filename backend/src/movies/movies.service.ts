import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { OmdbSearchResponse, OmdbSearchItem } from '../common/omdb.types';

@Injectable()
export class MoviesService {
  private readonly apiKey: string;

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {
    this.apiKey = this.config.get<string>('OMDB_API_KEY', '');
  }

  async search(query: string, page = 1): Promise<{ movies: OmdbSearchItem[]; total: number }> {
    if (!this.apiKey) throw new Error('OMDB_API_KEY not set');

    const url = `https://www.omdbapi.com/?apikey=${this.apiKey}&type=movie&s=${encodeURIComponent(
      query,
    )}&page=${page}`;

    const { data } = await firstValueFrom(this.http.get<OmdbSearchResponse>(url));

    if (data.Response === 'False') return { movies: [], total: 0 };

    const movies = (data.Search ?? []).map((m) => ({
      imdbID: m.imdbID,
      Title: m.Title,
      Year: m.Year,
      Poster: m.Poster,
    }));

    const total = parseInt(data.totalResults ?? '0', 10) || movies.length;
    return { movies, total };
  }
}
