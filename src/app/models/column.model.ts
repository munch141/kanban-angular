import { Post } from "./post.model";

export class Column {
  public id: number;
  public posts: Post[];

  constructor(public title: string) {
    this.posts = [];
  }
}
