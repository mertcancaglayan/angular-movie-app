import { Component, Input } from '@angular/core';
import { Movie } from '../../../../models/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-meta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-meta.component.html',
  styleUrl: './post-meta.component.scss',
})
export class PostMetaComponent {
  @Input() movie: Movie | undefined;

  getYearFromDate(date: string | undefined): string {
    if (date) {
      return new Date(date).getFullYear().toString();
    }
    return '1923';
  }
}
