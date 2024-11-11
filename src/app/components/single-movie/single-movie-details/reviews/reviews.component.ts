import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../../../models/movie.model';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent implements OnChanges {
  @Input() movieReviews?: Review[] | null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movieReviews'] && this.movieReviews) {
      this.movieReviews = this.movieReviews.map((review) => ({
        ...review,
        expanded: false, 
      }));
    }
  }

  toggleReview(review: Review) {
    review.expanded = !review.expanded;
  }
}
