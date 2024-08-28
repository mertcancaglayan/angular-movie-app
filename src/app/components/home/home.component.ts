import { Component } from '@angular/core';

import { MainSectionComponent } from './main-section/main-section.component';
import { SliderComponent } from './slider/slider.component';
import { TabbarComponent } from './tabbar/tabbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainSectionComponent, SliderComponent, TabbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
