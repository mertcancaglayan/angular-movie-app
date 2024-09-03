import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { TabbarComponent } from "../tabbar/tabbar.component";
import { MovieCardComponent } from "../movie-card/movie-card.component";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [SearchBarComponent, TabbarComponent, MovieCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

}
