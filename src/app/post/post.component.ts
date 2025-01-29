import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  public placeHolder = "MR ";

  public appName = "i18n-POC-1"

  public emptyPlaceholder = $localize`:@@appTitle:${this.placeHolder}`;

  public combinedMessage = $localize`:@@appTitle:Testing the working of angular localize. Testing done by ${this.placeHolder} in application ${this.appName}`;

  public combinedMessage1 = $localize`:@@appTitle-empty:Testing the working of angular localize. Testing done by developer in application i18n POC`;
}
