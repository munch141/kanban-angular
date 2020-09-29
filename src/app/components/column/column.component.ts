import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { Post } from "../post/post.model";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Column } from '../../models/column.model';

@Component({
  selector: "app-column",
  templateUrl: "./column.component.html",
  styleUrls: ["./column.component.scss"],
})
export class ColumnComponent implements OnInit {
  faTimes = faTimes;

  @Input() column: Column;
  @Output() delete = new EventEmitter<number>();

  posts: Post[] = [];

  constructor() {}

  ngOnInit(): void {}

  onClickDelete() {
    this.delete.emit(this.column.id);
  }
}
