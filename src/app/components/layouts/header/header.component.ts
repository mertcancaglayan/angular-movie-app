import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() movie: Movie | undefined;
  @Input() isMovieInFav: boolean = false;

  constructor(private location: Location) {}

  saveToFav(movie: any) {
    if (movie && typeof window !== 'undefined' && localStorage) {
      let favMovies = JSON.parse(localStorage.getItem('fav-movies') || '[]');

      const isMovieInFav = favMovies.some(
        (favMovie: any) => favMovie.id === movie.id
      );

      if (!isMovieInFav) {
        favMovies.push(movie);
        localStorage.setItem('fav-movies', JSON.stringify(favMovies));
        this.isMovieInFav = true;
      } else {
        favMovies = favMovies.filter(
          (favMovie: any) => favMovie.id !== movie.id
        );
        localStorage.setItem('fav-movies', JSON.stringify(favMovies));
        this.isMovieInFav = false;
      }
    }
  }

  goBack() {
    this.location.back();
  }
}
