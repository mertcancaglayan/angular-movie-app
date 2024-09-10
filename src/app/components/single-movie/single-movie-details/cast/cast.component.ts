import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cast.component.html',
  styleUrl: './cast.component.scss',
})
export class CastComponent {
  @Input() movieCast: any;
}
