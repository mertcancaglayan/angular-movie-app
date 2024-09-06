import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../../../../models/movie.model';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss',
})
export class SlideComponent {
  @Input() movie: Movie | undefined;
  @Input() listNumber: number = 0;

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original/${posterPath}`;
  }
}
