import { Component } from '@angular/core';
import { TabbarComponent } from '../tabbar/tabbar.component';
import { HeaderComponent } from '../layouts/header/header.component';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [TabbarComponent, HeaderComponent],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss',
})
export class WatchListComponent {
  title: string = 'Watch list';
}
