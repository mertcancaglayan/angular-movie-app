import { createAction, props } from '@ngrx/store';
import { Movie, Review, CastMember } from '../models/movie.model';

export const loadTrendingMovies = createAction('[Movies] Load Trending Movies');

export const loadTrendingMoviesSuccess = createAction(
  '[Movies] Load Trending Movies Success',
  props<{ movies: Movie[] }>()
);

export const loadTrendingMoviesFailure = createAction(
  '[Movies] Load Trending Movies Failure',
  props<{ error: any }>()
);

export const loadCategoryMovies = createAction(
  '[Movies] Load Category Movies',
  props<{ category: string }>()
);

export const loadCategoryMoviesSuccess = createAction(
  '[Movies] Load Category Movies Success',
  props<{ movies: Movie[] }>()
);

export const loadCategoryMoviesFailure = createAction(
  '[Movies] Load Category Movies Failure',
  props<{ error: any }>()
);

export const loadMovieDetails = createAction(
  '[Movies] Load Movie Details',
  props<{ movieId: number }>()
);

export const loadMovieDetailsSuccess = createAction(
  '[Movies] Load Movie Details Success',
  props<{ movie: Movie }>()
);

export const loadMovieDetailsFailure = createAction(
  '[Movies] Load Movie Details Failure',
  props<{ error: any }>()
);

export const loadMovieReviews = createAction(
  '[Movies] Load Movie Reviews',
  props<{ movieId: number }>()
);
export const loadMovieReviewsSuccess = createAction(
  '[Movies] Load Movie Reviews Success',
  props<{ reviews: Review[] }>()
);
export const loadMovieReviewsFailure = createAction(
  '[Movies] Load Movie Reviews Failure',
  props<{ error: any }>()
);

export const loadMovieCast = createAction(
  '[Movies] Load Movie Cast',
  props<{ movieId: number }>()
);
export const loadMovieCastSuccess = createAction(
  '[Movies] Load Movie Cast Success',
  props<{ cast: CastMember[] }>()
);
export const loadMovieCastFailure = createAction(
  '[Movies] Load Movie Cast Failure',
  props<{ error: any }>()
);

export const searchMovies = createAction(
  '[Movies] Search Movies',
  props<{ query: string }>()
);
export const searchMoviesSuccess = createAction(
  '[Movies] Search Movies Success',
  props<{ movies: Movie[] }>()
);
export const searchMoviesFailure = createAction(
  '[Movies] Search Movies Failure',
  props<{ error: any }>()
);
