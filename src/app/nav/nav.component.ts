import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  public selectedValue: string = "en";
  constructor() {
  }

  ngOnInit() {

    this.selectedValue = localStorage.getItem("lang") || "en";
   }
  changeLang() {
    console.log(this.selectedValue)
    localStorage.setItem("lang", this.selectedValue);
  }
}
