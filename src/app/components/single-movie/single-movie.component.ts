import { Component } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';

@Component({
  selector: 'app-single-movie',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.scss',
})
export class SingleMovieComponent {
  title: string = 'Detail';
}
