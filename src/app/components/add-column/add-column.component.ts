import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-add-column",
  templateUrl: "./add-column.component.html",
  styleUrls: ["./add-column.component.css"],
})
export class AddColumnComponent implements OnInit {
  @Output() addColumn = new EventEmitter();

  faPlus = faPlus;

  constructor() {}

  ngOnInit(): void {}

  onClickAddColumn() {
    this.addColumn.emit();
  }
}
