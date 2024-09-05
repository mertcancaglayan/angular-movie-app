import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss',
})
export class SlideComponent {
  @Input() movie: any;
  @Input() listNumber: any;

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original/${posterPath}`;
  }
}
