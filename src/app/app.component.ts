import { Component } from '@angular/core';
import { ArticleListComponentComponent } from './components/article-list-component/article-list-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponentComponent, ArticleListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SadjoAldi';
}
