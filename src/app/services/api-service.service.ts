import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Movies {
  id: number;
  title: string;
  poster_path: string;
}

interface ApiResponse {
  results: Movies[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'c70c2c6709bdbe1673fd7853df05d18d';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<ApiResponse> {
    const url = `${this.baseUrl}/movie/popular?language=en-US&page=1&api_key=${this.apiKey}`;
    return this.http.get<ApiResponse>(url);
  }

  getNowPlayingMovies(): Observable<ApiResponse> {
    const url = `${this.baseUrl}/movie/now_playing?language=en-US&page=1&api_key=${this.apiKey}`;
    return this.http.get<ApiResponse>(url);
  }

  getTopRatedMovies(): Observable<ApiResponse> {
    const url = `${this.baseUrl}/movie/top_rated?language=en-US&page=1&api_key=${this.apiKey}`;
    return this.http.get<ApiResponse>(url);
  }

  getUpcomingMovies(): Observable<ApiResponse> {
    const url = `${this.baseUrl}/movie/upcoming?language=en-US&page=1&api_key=${this.apiKey}`;
    return this.http.get<ApiResponse>(url);
  }

  getMovieDetails(movieId: number): Observable<Movies> {
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<Movies>(url);
  }

  searchMovies(query: string): Observable<ApiResponse> {
    const url = `${this.baseUrl}/search/movie?language=en-US&query=${query}&api_key=${this.apiKey}`;
    return this.http.get<ApiResponse>(url);
  }
}
