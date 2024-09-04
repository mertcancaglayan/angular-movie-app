import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { SearchBarComponent } from '../layouts/search-bar/search-bar.component';
import { TabbarComponent } from '../layouts/tabbar/tabbar.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { response } from 'express';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    MovieCardComponent,
    HeaderComponent,
    SearchBarComponent,
    TabbarComponent,
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent implements OnInit {
  title: string = 'Search';
  error: boolean = false;
  searchedQuery: string = '';
  movies: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.searchedQuery = params.get('q') || '';
      if (this.searchedQuery.trim()) {
        this.fetchSearchMovies(this.searchedQuery);
        console.log(this.movies);
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
        console.error('Error fetching news:', error);
        this.error = true;
      }
    );
  }
}
