import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { SearchService } from '../../services/search-service.service';
import { HeaderComponent } from '../layouts/header/header.component';
import { SearchBarComponent } from '../layouts/search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TabbarComponent } from '../layouts/tabbar/tabbar.component';
import { NoResultComponent } from './no-result/no-result.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-page',
  standalone: true,
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  imports: [
    HeaderComponent,
    SearchBarComponent,
    SearchResultsComponent,
    TabbarComponent,
    NoResultComponent,
    CommonModule,
  ],
})
export class SearchPageComponent implements OnInit {
  title: string = 'Search';
  error: boolean = false;
  searchedQuery: string = '';
  movies: any;

  constructor(
    private apiService: ApiService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchService.searchQuery.subscribe((query) => {
      this.searchedQuery = query;
      if (this.searchedQuery.trim()) {
        this.fetchSearchMovies(this.searchedQuery);
      }
    });
  }

  fetchSearchMovies(query: string): void {
    this.apiService.searchMovies(query).subscribe(
      (response) => {
        this.movies = response.results;
        this.error = false;
      },
      (error) => {
        console.error('Error fetching movies:', error);
        this.error = true;
      }
    );
  }
}
