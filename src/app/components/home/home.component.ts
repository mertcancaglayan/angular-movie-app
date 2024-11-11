import { Component, OnInit } from '@angular/core';
import { MainSectionComponent } from './main-section/main-section.component';
import { SliderComponent } from './slider/slider.component';
import { SearchBarComponent } from '../layouts/search-bar/search-bar.component';
import { TabbarComponent } from '../layouts/tabbar/tabbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainSectionComponent,
    SliderComponent,
    SearchBarComponent,
    TabbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
