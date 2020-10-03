import { Component, EventEmitter, Output } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-new-column-form",
  templateUrl: "./new-column-form.component.html",
  styleUrls: ["./new-column-form.component.css"],
})
export class NewColumnFormComponent {
  @Output() dismiss = new EventEmitter();
  @Output() addColumn = new EventEmitter<string>();

  columnTitle: string = null;

  faTimes = faTimes;

  handleDismiss() {
    this.dismiss.emit();
  }

  handleSubmit(columnForm: NgForm) {
    this.addColumn.emit(this.columnTitle);
    columnForm.reset();
    this.handleDismiss();
  }
}
