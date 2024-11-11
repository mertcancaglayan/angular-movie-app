import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { RateScreenComponent } from './rate-screen/rate-screen.component';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { SingleMovieDetailsComponent } from './single-movie-details/single-movie-details.component';
import { Movie } from '../../models/movie.model';
import { TabbarComponent } from '../layouts/tabbar/tabbar.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectError, selectMovieDetails } from '../../states/movie.selectors';
import * as MovieActions from '../../states/movie.action';

@Component({
  selector: 'app-single-movie',
  standalone: true,
  imports: [
    HeaderComponent,
    RateScreenComponent,
    CommonModule,
    BannerComponent,
    SingleMovieDetailsComponent,
    TabbarComponent,
  ],
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss'],
})
export class SingleMovieComponent implements OnInit {
  title: string = 'Detail';
  movieId: number;
  movie$: Observable<Movie | null>;
  error$: Observable<Boolean>;
  isMovieInFav: boolean = false;

  constructor(private router: Router, private store: Store) {
    this.error$ = this.store.select(selectError);

    const navigation = this.router.getCurrentNavigation();
    this.movieId = navigation?.extras?.state?.['movieId'] || null;

    if (this.movieId) {
      this.store.dispatch(
        MovieActions.loadMovieDetails({ movieId: this.movieId })
      );
    }
    this.movie$ = this.store.select(selectMovieDetails);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const navigation = this.router.getCurrentNavigation();
        const newMovieId = navigation?.extras?.state?.['movieId'];

        if (newMovieId && newMovieId !== this.movieId) {
          this.movieId = newMovieId;
          this.store.dispatch(
            MovieActions.loadMovieDetails({ movieId: this.movieId })
          );
        }
      }
    });
  }

  navigateToArticle(movie: Movie): void {
    this.router.navigate(['/single-movie'], { state: { movie } });
  }

  checkIfMovieInFav(): boolean {
    if (this.movie$) {
      let favMovies = JSON.parse(localStorage.getItem('fav-movies') || '[]');
      this.isMovieInFav = favMovies.some(
        (favMovie: Movie) => favMovie.id === this.movieId
      );
    }
    return this.isMovieInFav;
  }
}
