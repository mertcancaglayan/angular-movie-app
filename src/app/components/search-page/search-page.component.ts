import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { SearchBarComponent } from '../layouts/search-bar/search-bar.component';
import { TabbarComponent } from '../layouts/tabbar/tabbar.component';

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
export class SearchPageComponent {
  title: string = 'Search';
}
