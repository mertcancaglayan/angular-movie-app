import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() movie: Movie | undefined;

  getBackgroundImgUrl(backdropPath: string): string {
    return `https://image.tmdb.org/t/p/original/${backdropPath}`;
  }

  displayOverlay(): void {
    const overlay = document.querySelector('.overlay') as HTMLElement;
    if (overlay) {
      overlay.style.display = 'flex';
    }
  }

  get movieRating(): number | undefined {
    const rating = this.movie?.vote_average;
    if (rating !== undefined) {
      return Math.round(rating * 10) / 10;
    }
    return undefined;
  }
}
