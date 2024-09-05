import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-meta',
  standalone: true,
  imports: [],
  templateUrl: './post-meta.component.html',
  styleUrl: './post-meta.component.scss',
})
export class PostMetaComponent {
  @Input() movie: any;

  getYearFromDate(dateString: string): string {
    const date = new Date(dateString);
    return date.getFullYear().toString();
  }
}
