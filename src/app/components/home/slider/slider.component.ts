import {
  Component,
  AfterViewInit,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide/slide.component';
import { Movie } from '../../../models/movie.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectError,
  selectTrendingMovies,
} from '../../../states/movie.selectors';
import * as MovieActions from '../../../states/movie.action';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SlideComponent, CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('slider') sliderRef!: ElementRef<HTMLElement>;

  trendingMovies$: Observable<Movie[]>;
  error$: Observable<any>;
  private errorSubscription!: Subscription;

  slider!: HTMLElement;
  error: boolean = false;

  constructor(
    private store: Store,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.error$ = this.store.select(selectError);
    this.trendingMovies$ = this.store.select(selectTrendingMovies);
  }

  ngOnInit(): void {
    this.loadTrendingMovies();

    this.errorSubscription = this.error$.subscribe((error) => {
      if (error) {
        console.error('Error fetching trending movies:', error);
        this.error = true;
      }
    });
  }

  loadTrendingMovies() {
    this.store.dispatch(MovieActions.loadTrendingMovies());
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.slider = this.sliderRef?.nativeElement;
      if (!this.slider) {
        this.error = true;
        console.error('Slider element not found.');
        return;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
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
