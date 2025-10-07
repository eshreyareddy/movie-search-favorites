
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import type { Movie } from './favorites.service';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favorites: FavoritesService) {}

  @Get()
  all() {
    return this.favorites.list();
  }

  @Post()
  add(@Body() movie: Movie) {
    if (!movie?.imdbID) {
      return { ok: false, error: 'imdbID required' };
    }
    return this.favorites.add(movie);
  }

  @Delete(':imdbID')
  remove(@Param('imdbID') imdbID: string) {
    return this.favorites.remove(imdbID);
  }
}
