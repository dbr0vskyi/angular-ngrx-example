import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  ITodoDetailsPageState,
  todoDetailsStoreFeature,
} from "./todo-details.reducer";

const selectTodoDetailsPageStoreFeature = createFeatureSelector<
  ITodoDetailsPageState
>(todoDetailsStoreFeature);

export const selectTodo = createSelector(
  selectTodoDetailsPageStoreFeature,
  (state) => state.todo
);
