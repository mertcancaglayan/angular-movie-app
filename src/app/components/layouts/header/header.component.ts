import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() movie: number | null = null;

  constructor(private location: Location) {}

  saveToFav(movie: any) {
    if (movie) {
      let favMovies = JSON.parse(localStorage.getItem('fav-movies') || '[]');

      const isMovieInFav = favMovies.some(
        (favMovie: any) => favMovie.id === movie.id
      );

      if (!isMovieInFav) {
        favMovies.push(movie);
        localStorage.setItem('fav-movies', JSON.stringify(favMovies));
      }
    }
  }

  goBack() {
    this.location.back();
  }
}
