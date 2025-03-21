export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  isPublished: boolean;
  likeCount: number;
  isLiked: boolean;
  categoryName: string;
}
