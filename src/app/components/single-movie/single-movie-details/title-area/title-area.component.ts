import { Component, Input } from '@angular/core';
import { Movie } from '../../../../models/movie.model';
import { SingleMovieDetailsComponent } from '../single-movie-details.component';

@Component({
  selector: 'app-title-area',
  standalone: true,
  imports: [],
  templateUrl: './title-area.component.html',
  styleUrls: [
    './title-area.component.scss',
    '../single-movie-details-responsive.scss',
  ],
})
export class TitleAreaComponent {
  @Input() movie: Movie | undefined;
}
