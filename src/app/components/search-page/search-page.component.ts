import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { TabbarComponent } from "../tabbar/tabbar.component";
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { HeaderComponent } from "../layouts/header/header.component";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [SearchBarComponent, TabbarComponent, MovieCardComponent, HeaderComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
 title: string = "Search"
}
