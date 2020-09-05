import { Component, OnInit } from "@angular/core";
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent implements OnInit {
  columns = ["1", "2", "3"];

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
