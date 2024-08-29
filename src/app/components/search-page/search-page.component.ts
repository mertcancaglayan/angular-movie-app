import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { TabbarComponent } from "../tabbar/tabbar.component";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [SearchBarComponent, TabbarComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

}
