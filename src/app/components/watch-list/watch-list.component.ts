import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { TabbarComponent } from '../layouts/tabbar/tabbar.component';
import { NoWatchListComponent } from './no-watch-list/no-watch-list.component';
import { WatchListItemsComponent } from './watch-list-items/watch-list-items.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [
    HeaderComponent,
    TabbarComponent,
    NoWatchListComponent,
    WatchListItemsComponent,
    CommonModule,
  ],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss',
})
export class WatchListComponent implements OnInit {
  title: string = 'Watch list';
  favMovies: Movie[] = [];

  ngOnInit(): void {
    if (typeof window !== 'undefined' && localStorage) {
      this.favMovies = JSON.parse(localStorage.getItem('fav-movies') || '[]');
    }
  }
}
