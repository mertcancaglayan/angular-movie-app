import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingScreenComponent } from "./components/loading-screen/loading-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-movie-app';
}
