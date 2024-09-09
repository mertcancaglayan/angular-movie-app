import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

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
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<Movie>(url);
  }

  searchMovies(query: string): Observable<{ results: Movie[] }> {
    const url = `${this.baseUrl}/search/movie?language=en-US&query=${query}&api_key=${this.apiKey}`;
    return this.http.get<{ results: Movie[] }>(url);
  }
}
