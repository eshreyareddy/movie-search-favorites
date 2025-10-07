import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { FavoritesController } from './favorites/favorites.controller';
import { FavoritesService } from './favorites/favorites.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HttpModule],
  controllers: [MoviesController, FavoritesController],
  providers: [MoviesService, FavoritesService],
})
export class AppModule {}
