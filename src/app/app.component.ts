import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrinkHomeComponent } from './components/drink-home/drink-home.component';

@Component({
  selector: 'app-root',
  imports: [DrinkHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'energy-drink-app';
}
