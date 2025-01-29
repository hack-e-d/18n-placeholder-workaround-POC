import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'i18n-POC-1';
}
