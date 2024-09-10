import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { Movie } from '../../../models/movie.model';
import { Observable } from 'rxjs';

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
    this.movies = [];
    this.error = false;

    this.apiService.getMoviesByCategory(category).subscribe(
      (response) => {
        this.movies = response.results;
      },
      (error) => {
        console.error(`Error fetching ${category} movies:`, error);
        this.error = true;
      }
    );
  }

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original/${posterPath}`;
  }

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
    this.fetchMoviesByCategory(this.selectedCategory);
  }
}
