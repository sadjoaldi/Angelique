import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss',
})
export class HeaderComponentComponent {
  name: string = 'Bob';
  imageSrc: string = 'https://via.placeholder.com/350x150';
  sayHello(): void {
    alert('Hello !');
  }
}
