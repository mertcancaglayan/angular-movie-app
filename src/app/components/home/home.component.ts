import { Component } from '@angular/core';
import { TabbarComponent } from '../tabbar/tabbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
