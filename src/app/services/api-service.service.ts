import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Movie, Review, CastMember } from '../models/movie.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.baseUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getTrendingMovies(): Observable<{ results: Movie[] }> {
    const url = `${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`;
    return this.http.get<{ results: Movie[] }>(url);
  }

  getMoviesByCategory(category: string): Observable<{ results: Movie[] }> {
    const url = `${this.baseUrl}/movie/${category}?language=en-US&page=1&api_key=${this.apiKey}`;
    return this.http.get<{ results: Movie[] }>(url);
  }

  getMovieDetails(movieId: number): Observable<Movie> {
    if (!movieId) {
      return throwError('Movie ID is invalid or undefined');
    }

    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<Movie>(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getMovieReviews(movieId: number): Observable<{ results: Review[] }> {
    if (!movieId) {
      return throwError('Movie ID is invalid or undefined');
    }

    const url = `${this.baseUrl}/movie/${movieId}/reviews?language=en-US&page=1&api_key=${this.apiKey}`;
    return this.http.get<{ results: Review[] }>(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getMovieCast(movieId: number): Observable<{ cast: CastMember[] }> {
    if (!movieId) {
      return throwError('Movie ID is invalid or undefined');
    }

    const url = `${this.baseUrl}/movie/${movieId}/credits?language=en-US&api_key=${this.apiKey}`;
    return this.http.get<{ cast: CastMember[] }>(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  searchMovies(query: string): Observable<{ results: Movie[] }> {
    const url = `${this.baseUrl}/search/movie?language=en-US&query=${query}&api_key=${this.apiKey}`;
    return this.http.get<{ results: Movie[] }>(url);
  }
}
