import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Post {
  public title: string;
  public body: string;

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
  }
}
