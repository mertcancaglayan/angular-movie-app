import { Component } from '@angular/core';

import { MainSectionComponent } from './main-section/main-section.component';
import { SliderComponent } from './slider/slider.component';
import { TabbarComponent } from "../tabbar/tabbar.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainSectionComponent, SliderComponent, TabbarComponent, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
