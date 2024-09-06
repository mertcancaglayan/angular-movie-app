import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() movie: number | null = null;

  saveToFav() {
    if (this.movie) {
      let favMovies = JSON.parse(localStorage.getItem('fav-movies') || '[]');

      if (!favMovies.includes(this.movie)) {
        favMovies.push(this.movie);
        localStorage.setItem('fav-movies', JSON.stringify(favMovies));
        console.log('Film favorilere eklendi:', this.movie);
      } else {
        console.log('Film zaten favorilerde.');
      }
    }
  }
}
