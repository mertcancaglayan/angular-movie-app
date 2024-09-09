import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'c70c2c6709bdbe1673fd7853df05d18d';

  constructor(private http: HttpClient) {}

  getTrendingMovies(): Observable<{ results: Movie[] }> {
    const url = `${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`;
    return this.http.get<{ results: Movie[] }>(url);
  }

  getPopularMovies(): Observable<{ results: Movie[] }> {
    const url = `${this.baseUrl}/movie/popular?language=en-US&page=1&api_key=${this.apiKey}`;
    return this.http.get<{ results: Movie[] }>(url);
  }

  getNowPlayingMovies(): Observable<{ results: Movie[] }> {
    const url = `${this.baseUrl}/movie/now_playing?language=en-US&page=1&api_key=${this.apiKey}`;
    return this.http.get<{ results: Movie[] }>(url);
  }

  getTopRatedMovies(): Observable<{ results: Movie[] }> {
    const url = `${this.baseUrl}/movie/top_rated?language=en-US&page=1&api_key=${this.apiKey}`;
    return this.http.get<{ results: Movie[] }>(url);
  }

  getUpcomingMovies(): Observable<{ results: Movie[] }> {
    const url = `${this.baseUrl}/movie/upcoming?language=en-US&page=1&api_key=${this.apiKey}`;
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

  searchMovies(query: string): Observable<{ results: Movie[] }> {
    const url = `${this.baseUrl}/search/movie?language=en-US&query=${query}&api_key=${this.apiKey}`;
    return this.http.get<{ results: Movie[] }>(url);
  }
}
