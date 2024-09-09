import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-tabbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SearchBarComponent],
  templateUrl: './tabbar.component.html',
  styleUrl: './tabbar.component.scss',
})
export class TabbarComponent {
  tabSearchArea: string = 'tabbar';
}
