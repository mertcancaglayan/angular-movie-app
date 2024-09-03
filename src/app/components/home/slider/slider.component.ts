import { Component } from '@angular/core';
import { SlideComponent } from "./slide/slide.component";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SlideComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

}
