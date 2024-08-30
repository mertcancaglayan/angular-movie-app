import { Component } from '@angular/core';
import { TabbarComponent } from "../tabbar/tabbar.component";

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [TabbarComponent],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss'
})
export class WatchListComponent {

}
