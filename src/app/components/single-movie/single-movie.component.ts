import { Component } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { RateScreenComponent } from './rate-screen/rate-screen.component';

@Component({
  selector: 'app-single-movie',
  standalone: true,
  imports: [HeaderComponent, RateScreenComponent],
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.scss',
})
export class SingleMovieComponent {
  title: string = 'Detail';

  displayOverlay(): void {
    const overlay = document.querySelector('.overlay') as HTMLElement;
    if (overlay) {
      overlay.style.display = 'flex';
    }
  }
}
