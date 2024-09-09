import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../../services/search-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchQuery: string = '';
  @Input() location: string = 'section';

  constructor(private router: Router, private searchService: SearchService) {}

  onSearch(event: Event): void {
    event.preventDefault();

    if (this.searchQuery.trim()) {
      this.searchService.setSearchQuery(this.searchQuery);

      this.router.navigate(['/search'], {
        queryParams: { q: this.searchQuery },
      });
    }
  }
}
