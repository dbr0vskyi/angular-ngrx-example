import { ITodo } from "../../../interfaces/todo.interface";
import { createReducer, on } from "@ngrx/store";
import { appActions } from "../../../+state/app.actions";
import { setState } from "../../../helpers/set-state";

export interface ITodoDetailsPageState {
  todo: ITodo;
}

export const todoDetailsStoreFeature = "todo-details-page";

const initialState: ITodoDetailsPageState = {
  todo: undefined,
};

const reducer = createReducer(
  initialState,
  on(appActions.initStore, setState(initialState))
);

export function todoDetailsPageReducer(state, action) {
  return reducer(state, action);
}
