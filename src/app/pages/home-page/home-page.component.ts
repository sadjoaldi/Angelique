import { Component } from '@angular/core';
import { ArticleListComponentComponent } from '../../components/article-list-component/article-list-component.component';

@Component({
  selector: 'app-home-page',
  imports: [ArticleListComponentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
