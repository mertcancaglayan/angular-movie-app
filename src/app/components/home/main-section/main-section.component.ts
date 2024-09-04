import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'], // 'styleUrls' olarak düzeltilmeli
})
export class MainSectionComponent implements OnInit {
  movies: any;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchSearchMovies();
  }

  fetchSearchMovies(): void {
    this.apiService.getNowPlayingMovies().subscribe(
      (response) => {
        this.movies = response.results;
        this.error = false;
      },
      (error) => {
        console.error('Error fetching movies:', error);
        this.error = true;
      }
    );
  }

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original/${posterPath}`;
  }
}
