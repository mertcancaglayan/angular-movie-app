import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './movie.action';
import { Movie, Review, CastMember } from '../models/movie.model';

export interface MovieState {
  trendingMovies: Movie[];
  categoryMovies: Movie[];
  movieDetails: Movie | null;
  movieReviews: Review[];
  movieCast: CastMember[];
  searchedMovies: Movie[];
  loading: boolean;
  error: any;
}

const initialState: MovieState = {
  trendingMovies: [],
  categoryMovies: [],
  movieDetails: null,
  movieReviews: [],
  movieCast: [],
  searchedMovies: [],
  loading: false,
  error: false,
};

export const movieReducer = createReducer(
  initialState,

  // Trending Movies
  on(MovieActions.loadTrendingMovies, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MovieActions.loadTrendingMoviesSuccess, (state, { movies }) => ({
    ...state,
    trendingMovies: movies,
    loading: false,
  })),
  on(MovieActions.loadTrendingMoviesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Category Movies
  on(MovieActions.loadCategoryMovies, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MovieActions.loadCategoryMoviesSuccess, (state, { movies }) => ({
    ...state,
    categoryMovies: movies,
    loading: false,
  })),
  on(MovieActions.loadCategoryMoviesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Movie Details
  on(MovieActions.loadMovieDetails, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MovieActions.loadMovieDetailsSuccess, (state, { movie }) => ({
    ...state,
    movieDetails: movie,
    loading: false,
  })),
  on(MovieActions.loadMovieDetailsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Movie Reviews
  on(MovieActions.loadMovieReviews, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MovieActions.loadMovieReviewsSuccess, (state, { reviews }) => ({
    ...state,
    movieReviews: reviews,
    loading: false,
  })),
  on(MovieActions.loadMovieReviewsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Movie Cast
  on(MovieActions.loadMovieCast, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MovieActions.loadMovieCastSuccess, (state, { cast }) => ({
    ...state,
    movieCast: cast,
    loading: false,
  })),
  on(MovieActions.loadMovieCastFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Search Movies
  on(MovieActions.searchMovies, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MovieActions.searchMoviesSuccess, (state, { movies }) => ({
    ...state,
    searchedMovies: movies,
    loading: false,
  })),
  on(MovieActions.searchMoviesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
