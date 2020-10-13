import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Column } from "src/app/models/column.model";

@Component({
  selector: "app-add-column",
  templateUrl: "./add-column.component.html",
  styleUrls: ["./add-column.component.css"],
})
export class AddColumnComponent implements OnInit {
  @Output() addColumn = new EventEmitter<Column>();

  showForm: boolean = false;
  faPlus = faPlus;

  constructor() {}

  ngOnInit(): void {}

  onConfirmAddColumn(column: Column) {
    this.addColumn.emit(column);
  }
}
