import { Component, OnInit } from '@angular/core';
import { MainSectionComponent } from './main-section/main-section.component';
import { SliderComponent } from './slider/slider.component';
import { SearchBarComponent } from '../layouts/search-bar/search-bar.component';
import { TabbarComponent } from '../layouts/tabbar/tabbar.component';
import { ApiService } from '../../services/api-service.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainSectionComponent,
    SliderComponent,
    SearchBarComponent,
    TabbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies: Movie[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadtrendingMovies();
  }

  loadtrendingMovies(): void {
    this.apiService.getTrendingMovies().subscribe({
      next: (response) => {
        this.trendingMovies = response.results.slice(0, 10);
      },
      error: (err) => {
        console.error('API call failed:', err);
      },
    });
  }
}
