import { ITodo } from "../../../interfaces/todo.interface";
import { createReducer, on } from "@ngrx/store";
import { todoActions } from "./todo.actions";
import { setProp } from "../../../helpers/set-prop";
import { setState } from "../../../helpers/set-state";
import { appActions } from "../../../+state/app.actions";

export interface ITodoPageState {
  loading: boolean;
  todos: ITodo[];
}

export const todoPageStoreFeature = "todo-page";

const initialState: ITodoPageState = {
  loading: true,
  todos: [],
};

const reducer = createReducer(
  initialState,
  on(todoActions.loading, setProp("loading")),
  on(appActions.initStore, setState(initialState))
);

export function todoPageReducer(state, action) {
  return reducer(state, action);
}
