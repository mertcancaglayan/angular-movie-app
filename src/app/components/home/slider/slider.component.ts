import { Component, Input, AfterViewInit } from '@angular/core';
import { SlideComponent } from './slide/slide.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SlideComponent, CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  @Input() popularMovies: Movie[] = [];
  slider!: HTMLElement; // Declare slider

  ngAfterViewInit(): void {
    this.slider = document.querySelector<HTMLElement>('.slider')!;
  }

  slide(direction: 'next' | 'prev') {
    if (!this.slider) return; // Ensure slider is available

    const slideWidth = this.slider.clientWidth;
    const maxScrollLeft = this.slider.scrollWidth - this.slider.clientWidth;

    if (direction === 'prev') {
      if (this.slider.scrollLeft === 0) return;
      this.slider.scrollBy({
        left: -slideWidth,
        behavior: 'smooth',
      });
    } else if (direction === 'next') {
      if (this.slider.scrollLeft === maxScrollLeft) return;
      this.slider.scrollBy({
        left: slideWidth,
        behavior: 'smooth',
      });
    }
  }
}
