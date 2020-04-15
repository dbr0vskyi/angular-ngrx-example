import { RouterReducerState } from "@ngrx/router-store";
import {
  ITodoPageState,
  todoPageStoreFeature,
} from "../pages/todo/+state/todo.reducer";

export interface IAppStore {
  router: RouterReducerState;
  [todoPageStoreFeature]: ITodoPageState;
}
