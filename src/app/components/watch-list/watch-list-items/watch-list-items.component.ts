import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watch-list-items',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './watch-list-items.component.html',
  styleUrl: './watch-list-items.component.scss',
})
export class WatchListItemsComponent {
  @Input() movies: any;
  searchCard: string = 'searchCard';
}
