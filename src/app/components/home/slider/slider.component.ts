import {
  Component,
  Input,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  slider!: HTMLElement;
  error: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.slider = document.querySelector<HTMLElement>('.slider')!;
      if (!this.slider) {
        this.error = true;
        console.error(this.error);
        return;
      }
    }
  }

  slide(direction: 'next' | 'prev') {
    if (!this.slider) return;

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
