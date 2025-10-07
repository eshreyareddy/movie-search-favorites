import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movies: MoviesService) {}

  @Get('search')
  async search(@Query('q') q: string, @Query('page') page?: string) {
    const pageNum = Number(page) || 1;
    if (!q || !q.trim()) {
      return { movies: [], total: 0 };
    }
    return this.movies.search(q.trim(), pageNum);
  }
}
