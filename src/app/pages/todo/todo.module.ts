import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoComponent } from "./todo.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffects } from "./+state/todo.effects";
import { SharedModule } from "../../shared/shared.module";
import { todoPageReducer, todoPageStoreFeature } from "./+state/todo.reducer";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(todoPageStoreFeature, todoPageReducer),
    EffectsModule.forFeature([TodoEffects]),
    RouterModule.forChild([
      {
        path: "",
        component: TodoComponent,
      },
    ]),
  ],
})
export class TodoModule {}
