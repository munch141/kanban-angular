import { Component, OnInit } from "@angular/core";
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { Column } from "../column/column.model";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent implements OnInit {
  columns: Column[] = [new Column(1, "column 1")];
  columnsCreated: number = 1;

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    console.log(this.columns);
  }

  onClick() {
    this.columnsCreated++;
    this.columns.push(
      new Column(this.columnsCreated, `column ${this.columnsCreated}`)
    );
  }

  onDeleteColumn(id: number) {
    const index = this.columns.findIndex((column) => column.id == id);
    const deletedColumn = this.columns.splice(index, 1);
    console.log("deleted column: ", deletedColumn);
  }
}
