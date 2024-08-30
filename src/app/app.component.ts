import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingScreenComponent } from "./components/loading-screen/loading-screen.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchPageComponent } from "./components/search-page/search-page.component";
import { SingleMovieComponent } from "./components/single-movie/single-movie.component";
import { WatchListComponent } from "./components/watch-list/watch-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingScreenComponent, HomeComponent, SearchPageComponent, SingleMovieComponent, WatchListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-movie-app';
}
