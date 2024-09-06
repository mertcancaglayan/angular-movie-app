import { Component, Input } from '@angular/core';
import { SlideComponent } from './slide/slide.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SlideComponent, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @Input() popularMovies: Movie[]=[];
}
