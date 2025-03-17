import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-list-component',
  imports: [CommonModule],
  templateUrl: './article-list-component.component.html',
  styleUrl: './article-list-component.component.scss',
})
export class ArticleListComponentComponent {
  article: Article = {
    title: "Tite de l'article",
    content: "Voici le contenu de l'article",
    image: 'https://placehold.co/150x150',
    createdAt: new Date(),
    isPublished: false,
    likeCount: 0,
    categoryName: 'Angular',
  };
}
