import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { ColumnComponent } from "./components/column/column.component";
import { BoardComponent } from "./components/board/board.component";
import { PostComponent } from "./components/post/post.component";
import { AddColumnComponent } from './components/add-column/add-column.component';
import { NewColumnFormComponent } from './components/new-column-form/new-column-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ColumnComponent, BoardComponent, PostComponent, AddColumnComponent, NewColumnFormComponent],
  imports: [BrowserModule, DragDropModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
