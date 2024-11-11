import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastMember } from '../../../../models/movie.model';

@Component({
  selector: 'app-cast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cast.component.html',
  styleUrl: './cast.component.scss',
})
export class CastComponent {
  @Input() movieCast!: CastMember[] | null;
}
