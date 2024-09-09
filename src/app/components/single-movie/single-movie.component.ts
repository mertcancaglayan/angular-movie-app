import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { RateScreenComponent } from './rate-screen/rate-screen.component';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { SingleMovieDetailsComponent } from './single-movie-details/single-movie-details.component';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-single-movie',
  standalone: true,
  imports: [
    HeaderComponent,
    RateScreenComponent,
    CommonModule,
    BannerComponent,
    SingleMovieDetailsComponent,
  ],
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss'],
})
export class SingleMovieComponent implements OnInit {
  title: string = 'Detail';
  movieId: number = 12;
  movie: Movie | undefined;
  error: boolean = false;
  isMovieInFav: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {
    const navigation = this.router.getCurrentNavigation();
    this.movieId = navigation?.extras?.state?.['movieId'];
    this.fetchMovieDetails(this.movieId);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const navigation = this.router.getCurrentNavigation();
        this.movieId = navigation?.extras?.state?.['movieId'];
      }
    });
  }

  fetchMovieDetails(id: number): void {
    this.apiService.getMovieDetails(id).subscribe(
      (response) => {
        this.movie = response;
        this.error = false;
      },
      (error) => {
        console.error('Error fetching movies:', error);
        this.error = true;
      }
    );
  }

  navigateToArticle(movie: Movie): void {
    this.router.navigate(['/single-movie'], { state: { movie } });
  }

  checkIfMovieInFav(): boolean {
    if (this.movie) {
      let favMovies = JSON.parse(localStorage.getItem('fav-movies') || '[]');
      this.isMovieInFav = favMovies.some(
        (favMovie: Movie) => favMovie.id === this.movie?.id
      );
    }
    return this.isMovieInFav;
  }
}
