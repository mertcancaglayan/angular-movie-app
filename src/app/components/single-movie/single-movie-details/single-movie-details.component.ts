import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostMetaComponent } from './post-meta/post-meta.component';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-single-movie-details',
  standalone: true,
  imports: [CommonModule, PostMetaComponent],
  templateUrl: './single-movie-details.component.html',
  styleUrls: [
    './single-movie-details.component.scss',
    './single-movie-detalis-responsive.scss',
  ],
})
export class SingleMovieDetailsComponent {
  @Input() movie: Movie | undefined;
  detailSection: string = 'about';

  onDetailSelect(section: string) {
    this.detailSection = section;
  }
}
