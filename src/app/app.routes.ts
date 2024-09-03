import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'watchList', component: WatchListComponent },
  { path: 'single-movie', component: SingleMovieComponent },
  { path: '**', redirectTo: 'home' },
];
