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

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const category = params['category'] || 'now_playing';
      this.selectedCategory = category;
      this.fetchMoviesByCategory(category);
    });
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
        this.fetchSearchMovies();
        break;
    }
  }

  fetchSearchMovies(): void {
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
  }

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original/${posterPath}`;
  }

  onCategorySelect(category: string): void {
    this.router.navigate([], {
      queryParams: { category },
      queryParamsHandling: 'merge',
    });
    this.selectedCategory = category;
  }
}
