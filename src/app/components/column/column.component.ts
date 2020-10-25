import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { Column } from "../../models/column.model";
import { Post } from "../../models/post.model";

@Component({
  selector: "app-column",
  templateUrl: "./column.component.html",
  styleUrls: ["./column.component.scss"],
})
export class ColumnComponent implements OnInit {
  @Input() column: Column;
  @Output() delete = new EventEmitter<number>();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {
    this.column.posts.push(new Post("this is a post"));
    this.column.posts.push(new Post("this is another post"));
  }

  onClickDelete() {
    this.delete.emit(this.column.id);
  }
}
