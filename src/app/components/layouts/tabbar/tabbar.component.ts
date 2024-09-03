import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tabbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tabbar.component.html',
  styleUrl: './tabbar.component.scss',
})
export class TabbarComponent {}
