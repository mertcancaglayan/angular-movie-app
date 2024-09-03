import { Component } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { TabbarComponent } from '../layouts/tabbar/tabbar.component';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [HeaderComponent, TabbarComponent],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss',
})
export class WatchListComponent {
  title: string = 'Watch list';
}
