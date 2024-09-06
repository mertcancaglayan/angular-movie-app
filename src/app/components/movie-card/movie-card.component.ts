import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { genreMap } from '../../utils/genre-map';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie: Movie | undefined;
  @Input() showElement: string = '';
  @Input() genreType: string = ""

  getYearFromDate(date: string | undefined): string {
    if (date) {
      return new Date(date).getFullYear().toString();
    }
    return '1923';
  }

  get movieRating(): number | undefined {
    const rating = this.movie?.vote_average;
    if (rating !== undefined) {
      return Math.round(rating * 10) / 10;
    }
    return undefined;
  }

  get matchGenre(): string {
    if (this.movie?.genre_ids && this.movie.genre_ids.length > 0) {
      const firstGenreId = this.movie.genre_ids[0];
      return genreMap[firstGenreId] || 'Unknown';
    }
    return 'Unknown';
  }
}
