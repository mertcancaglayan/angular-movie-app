import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchServiceService } from '../../../services/search-service.service';
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

  constructor(
    private router: Router,
    private searchService: SearchServiceService
  ) {}

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
