import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { ColumnComponent } from "./components/column/column.component";
import { BoardComponent } from "./components/board/board.component";
import { PostComponent } from "./components/post/post.component";
import { AddColumnComponent } from './components/add-column/add-column.component';

@NgModule({
  declarations: [AppComponent, ColumnComponent, BoardComponent, PostComponent, AddColumnComponent],
  imports: [BrowserModule, DragDropModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
