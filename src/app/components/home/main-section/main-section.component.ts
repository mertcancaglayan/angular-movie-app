import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { Movie } from '../../../models/movie.model';
import * as MovieActions from '../../../states/movie.action';
import {
  selectCategoryMovies,
  selectLoading,
} from '../../../states/movie.selectors'; // Selectors to access state

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent implements OnInit {
  homePageCard: string = 'homePageCard';

  movies$: Observable<Movie[]>;
  loading$: Observable<boolean>;
  error: boolean = false;
  selectedCategory: string = 'now_playing';

  constructor(private store: Store) {
    this.store.dispatch(
      MovieActions.loadCategoryMovies({ category: this.selectedCategory })
    );

    this.movies$ = this.store.select(selectCategoryMovies);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {}

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
    this.store.dispatch(
      MovieActions.loadCategoryMovies({ category: this.selectedCategory })
    );
  }

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original/${posterPath}`;
  }
}
