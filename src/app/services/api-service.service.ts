import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'c70c2c6709bdbe1673fd7853df05d18d';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    let url = `${this.baseUrl}/movie/popular?language=en-US&page=1&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getMovieDetails(movieId: number): Observable<any> {
    let url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  searchMovies(query: string, page: number = 1): Observable<any> {
    let url = `${this.baseUrl}/search/movie?query=${query}&page=${page}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
