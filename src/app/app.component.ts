import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './components/header-component/header-component.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponentComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SadjoAldi';
}
