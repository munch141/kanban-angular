import { Component, EventEmitter, Output } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FormBuilder, Validators } from "@angular/forms";
import { Column } from "src/app/models/column.model";

@Component({
  selector: "app-new-column-form",
  templateUrl: "./new-column-form.component.html",
  styleUrls: ["./new-column-form.component.css"],
})
export class NewColumnFormComponent {
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
    this.addColumn.emit(new Column(this.columnForm.value.title));
    this.columnForm.reset();
    this.onDismiss();
  }
}
