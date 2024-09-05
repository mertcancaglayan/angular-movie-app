import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostMetaComponent } from "./post-meta/post-meta.component";

@Component({
  selector: 'app-single-movie-details',
  standalone: true,
  imports: [CommonModule, PostMetaComponent],
  templateUrl: './single-movie-details.component.html',
  styleUrl: './single-movie-details.component.scss',
})
export class SingleMovieDetailsComponent {
  @Input() movie: any;
  detailSection: string = 'about';

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original/${posterPath}`;
  }

  onDetailSelect(section: string) {
    this.detailSection = section;
  }
}
