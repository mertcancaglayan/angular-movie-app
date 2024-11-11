import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './movie.reducer';

export const selectMovieState = createFeatureSelector<MovieState>('movie');

export const selectTrendingMovies = createSelector(
  selectMovieState,
  (state) => state.trendingMovies
);

export const selectCategoryMovies = createSelector(
  selectMovieState,
  (state) => state.categoryMovies
);

export const selectMovieDetails = createSelector(
  selectMovieState,
  (state) => state.movieDetails
);

export const selectMovieReviews = createSelector(
  selectMovieState,
  (state) => state.movieReviews
);

export const selectMovieCast = createSelector(
  selectMovieState,
  (state) => state.movieCast
);

export const selectSearchedMovies = createSelector(
  selectMovieState,
  (state) => state.searchedMovies
);

export const selectLoading = createSelector(
  selectMovieState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectMovieState,
  (state) => state.error
);
