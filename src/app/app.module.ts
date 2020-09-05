import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppComponent } from "./app.component";
import { ColumnComponent } from "./components/column/column.component";
import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [AppComponent, ColumnComponent, BoardComponent],
  imports: [BrowserModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
