import { Component } from '@angular/core';

@Component({
  selector: 'app-rate-screen',
  standalone: true,
  imports: [],
  templateUrl: './rate-screen.component.html',
  styleUrls: ['./rate-screen.component.scss'],
})
export class RateScreenComponent {
  rateValue: number = 5;

  updateRateNumber(event: Event): void {
    const slider = event.target as HTMLInputElement;
    this.rateValue = +slider.value;

    const percentage =
      ((+slider.value - +slider.min) / (+slider.max - +slider.min)) * 100;
    (slider as HTMLElement).style.setProperty(
      '--slider-progress',
      `${percentage}%`
    );
  }

  submitRating(): void {
    alert('Rating submitted!');
    this.closeOverlay()
  }

  closeOverlay(): void {
    const overlay = document.querySelector('.overlay') as HTMLElement;
    if (overlay) {
      overlay.style.display = 'none';
    }
  }
}
