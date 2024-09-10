import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostMetaComponent } from './post-meta/post-meta.component';
import { Movie } from '../../../models/movie.model';
import { TitleAreaComponent } from './title-area/title-area.component';
import { ApiService } from '../../../services/api-service.service';
import { ReviewsComponent } from "./reviews/reviews.component";

@Component({
  selector: 'app-single-movie-details',
  standalone: true,
  imports: [CommonModule, PostMetaComponent, TitleAreaComponent, ReviewsComponent],
  templateUrl: './single-movie-details.component.html',
  styleUrls: [
    './single-movie-details.component.scss',
    './single-movie-details-responsive.scss',
  ],
})
export class SingleMovieDetailsComponent {
  @Input() movie: Movie | undefined;
  @Input() movieId: number | undefined;
  @Input() movieReviews: any;
  error: boolean = false;
  detailSection: string = 'about';

  onDetailSelect(section: string) {
    this.detailSection = section;
  }

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movieId'] && this.movieId) {
      this.getMovieReviews(this.movieId);
    }
  }

  getMovieReviews(id: number): void {
    this.apiService.getMovieReviews(id).subscribe({
      next: (response) => {
        this.movieReviews = response;
        this.error = false;
      },
      error: (error) => {
        console.error('Error fetching reviews:', error);
        this.error = true;
      },
    });
  }
}
