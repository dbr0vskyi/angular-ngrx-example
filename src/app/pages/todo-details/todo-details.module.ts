import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoDetailsComponent } from "./todo-details.component";
import { SharedModule } from "../../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { todoDetailsPageReducer } from "./+state/todo-details.reducer";

@NgModule({
  declarations: [TodoDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(todoDetailsPageStoreFeature, todoDetailsPageReducer),
  ],
})
export class TodoDetailsModule {}
