import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent implements OnInit {
  homePageCard: string = 'homePageCard';
  movies: Movie[] = [];
  error: boolean = false;
  selectedCategory: string = 'now_playing';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchMoviesByCategory(this.selectedCategory);
  }

  fetchMoviesByCategory(category: string): void {
    switch (category) {
      case 'upcoming':
        this.apiService.getUpcomingMovies().subscribe(
          (response) => {
            this.movies = response.results;
            this.error = false;
          },
          (error) => {
            console.error('Error fetching upcoming movies:', error);
            this.error = true;
          }
        );
        break;
      case 'top_rated':
        this.apiService.getTopRatedMovies().subscribe(
          (response) => {
            this.movies = response.results;
            this.error = false;
          },
          (error) => {
            console.error('Error fetching top rated movies:', error);
            this.error = true;
          }
        );
        break;
      case 'popular':
        this.apiService.getPopularMovies().subscribe(
          (response) => {
            this.movies = response.results;
            this.error = false;
          },
          (error) => {
            console.error('Error fetching popular movies:', error);
            this.error = true;
          }
        );
        break;
      default:
        this.apiService.getNowPlayingMovies().subscribe(
          (response) => {
            this.movies = response.results;
            this.error = false;
          },
          (error) => {
            console.error('Error fetching now playing movies:', error);
            this.error = true;
          }
        );
        break;
    }
  }

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original/${posterPath}`;
  }

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
    this.fetchMoviesByCategory(this.selectedCategory);
  }
}
