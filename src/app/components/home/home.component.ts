import { Component } from '@angular/core';
import { TabbarComponent } from '../tabbar/tabbar.component';
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabbarComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
