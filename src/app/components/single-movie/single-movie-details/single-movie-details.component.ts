import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostMetaComponent } from './post-meta/post-meta.component';
import { CastMember, Movie, Review } from '../../../models/movie.model';
import { TitleAreaComponent } from './title-area/title-area.component';
import { ApiService } from '../../../services/api-service.service';
import { ReviewsComponent } from './reviews/reviews.component';
import { CastComponent } from './cast/cast.component';
import { Store } from '@ngrx/store';
import * as MovieActions from '../../../states/movie.action';
import { Observable } from 'rxjs';
import {
  selectMovieCast,
  selectMovieReviews,
} from '../../../states/movie.selectors';

@Component({
  selector: 'app-single-movie-details',
  standalone: true,
  imports: [
    CommonModule,
    PostMetaComponent,
    TitleAreaComponent,
    ReviewsComponent,
    CastComponent,
  ],
  templateUrl: './single-movie-details.component.html',
  styleUrls: [
    './single-movie-details.component.scss',
    './single-movie-details-responsive.scss',
  ],
})
export class SingleMovieDetailsComponent {
  @Input() movie: Movie | undefined;
  @Input() movieId!: number;
  movieReviews$: Observable<Review[]>;
  movieCast$: Observable<CastMember[]>;
  error: boolean = false;
  detailSection: string = 'about';

  onDetailSelect(section: string) {
    this.detailSection = section;
  }

  constructor(private store: Store, private apiService: ApiService) {
    this.store.dispatch(
      MovieActions.loadMovieReviews({ movieId: this.movieId })
    );
    this.movieCast$ = this.store.select(selectMovieCast);

    this.store.dispatch(
      MovieActions.loadMovieReviews({ movieId: this.movieId })
    );
    this.movieReviews$ = this.store.select(selectMovieReviews);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movieId'] && this.movieId) {
      this.getMovieReviews(this.movieId);
      this.getMovieCast(this.movieId);
    }
  }

  getMovieReviews(id: number): void {
    this.store.dispatch(
      MovieActions.loadMovieReviews({ movieId: this.movieId })
    );
    this.movieReviews$ = this.store.select(selectMovieReviews);
  }

  getMovieCast(id: number): void {
    this.store.dispatch(MovieActions.loadMovieCast({ movieId: id }));

    this.movieCast$ = this.store.select(selectMovieCast);
  }
}
