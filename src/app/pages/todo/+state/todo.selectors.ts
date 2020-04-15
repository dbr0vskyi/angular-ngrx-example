import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITodoPageState, todoPageStoreFeature } from "./todo.reducer";

const selectTodoPageFeature = createFeatureSelector<ITodoPageState>(
  todoPageStoreFeature
);

export const selectTodos = createSelector(
  selectTodoPageFeature,
  (state) => state.todos
);

export const selectTodosLoading = createSelector(
  selectTodoPageFeature,
  (state) => state.loading
);
