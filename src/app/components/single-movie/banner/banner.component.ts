import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() movie: any;

  getBackgroundImgUrl(backdropPath: string): string {
    return `https://image.tmdb.org/t/p/original/${backdropPath}`;
  }

  getMovieRating(num: number):number {
    return Math.round(num * 10) / 10;
  }

  displayOverlay(): void {
    const overlay = document.querySelector('.overlay') as HTMLElement;
    if (overlay) {
      overlay.style.display = 'flex';
    }
  }
}
