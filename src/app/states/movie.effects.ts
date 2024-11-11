import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MovieActions from '../states/movie.action';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../services/api-service.service';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  // Trending Movies
  loadTrendingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadTrendingMovies),
      mergeMap(() =>
        this.apiService.getTrendingMovies().pipe(
          map((response) =>
            MovieActions.loadTrendingMoviesSuccess({ movies: response.results })
          ),
          catchError((error) =>
            of(MovieActions.loadTrendingMoviesFailure({ error }))
          )
        )
      )
    )
  );

  // Category Movies
  loadCategoryMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadCategoryMovies),
      mergeMap((action) =>
        this.apiService.getMoviesByCategory(action.category).pipe(
          map((response) =>
            MovieActions.loadCategoryMoviesSuccess({ movies: response.results })
          ),
          catchError((error) =>
            of(MovieActions.loadCategoryMoviesFailure({ error }))
          )
        )
      )
    )
  );

  // Movie Details
  loadMovieDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovieDetails),
      mergeMap((action) =>
        this.apiService.getMovieDetails(action.movieId).pipe(
          map((movie) => MovieActions.loadMovieDetailsSuccess({ movie })),
          catchError((error) =>
            of(MovieActions.loadMovieDetailsFailure({ error }))
          )
        )
      )
    )
  );

  // Movie Reviews
  loadMovieReviews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovieReviews),
      mergeMap((action) =>
        this.apiService.getMovieReviews(action.movieId).pipe(
          map((response) =>
            MovieActions.loadMovieReviewsSuccess({ reviews: response.results })
          ),
          catchError((error) =>
            of(MovieActions.loadMovieReviewsFailure({ error }))
          )
        )
      )
    )
  );

  // Movie Cast
  loadMovieCast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovieCast),
      mergeMap((action) =>
        this.apiService.getMovieCast(action.movieId).pipe(
          map((response) =>
            MovieActions.loadMovieCastSuccess({ cast: response.cast })
          ),
          catchError((error) =>
            of(MovieActions.loadMovieCastFailure({ error }))
          )
        )
      )
    )
  );

  // Search Movies
  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.searchMovies),
      mergeMap((action) =>
        this.apiService.searchMovies(action.query).pipe(
          map((response) =>
            MovieActions.searchMoviesSuccess({ movies: response.results })
          ),
          catchError((error) => of(MovieActions.searchMoviesFailure({ error })))
        )
      )
    )
  );
}
