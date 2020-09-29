import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Column } from "../../models/column.model";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-new-column-form",
  templateUrl: "./new-column-form.component.html",
  styleUrls: ["./new-column-form.component.css"],
})
export class NewColumnFormComponent implements OnInit {
  @Output() dismiss = new EventEmitter();
  @Output() addColumn = new EventEmitter<Column>();

  column: Column = new Column(null);

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  handleDismiss() {
    this.dismiss.emit();
  }

  handleSubmit(columnForm: NgForm) {
    this.addColumn.emit({ ...this.column });
    columnForm.reset();
    this.handleDismiss();
  }
}
