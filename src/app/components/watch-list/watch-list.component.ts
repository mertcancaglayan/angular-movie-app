import { Component } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { TabbarComponent } from '../layouts/tabbar/tabbar.component';
import { NoWatchListComponent } from "./no-watch-list/no-watch-list.component";

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [HeaderComponent, TabbarComponent, NoWatchListComponent],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss',
})
export class WatchListComponent {
  title: string = 'Watch list';
}
