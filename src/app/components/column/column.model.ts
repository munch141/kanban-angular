import { Post } from "../post/post.model";

export class Column {
  public id: number;
  public title: string;
  public posts: Post[];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.posts = [];
  }
}
