import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Column } from "../../models/column.model";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-new-column-form",
  templateUrl: "./new-column-form.component.html",
  styleUrls: ["./new-column-form.component.css"],
})
export class NewColumnFormComponent implements OnInit {
  @Output() dismiss = new EventEmitter();
  @Output() addColumn = new EventEmitter<Column>();

  columnForm = this.fb.group({
    title: ["", Validators.required],
  });

  faTimes = faTimes;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onDismiss() {
    this.dismiss.emit();
  }

  onSubmit() {
    this.addColumn.emit({ ...this.columnForm.value });
    this.columnForm.reset();
    this.onDismiss();
  }
}
