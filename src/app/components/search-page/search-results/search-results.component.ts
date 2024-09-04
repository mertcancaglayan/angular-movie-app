import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  @Input() movies: any;
  searchCard: string = "searchCard"

}