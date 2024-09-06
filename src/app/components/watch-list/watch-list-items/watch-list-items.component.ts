import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-watch-list-items',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './watch-list-items.component.html',
  styleUrl: './watch-list-items.component.scss',
})
export class WatchListItemsComponent {
  @Input() movies: Movie[] = [];
  searchCard: string = 'searchCard';
  genreType: string = 'genres';
}
