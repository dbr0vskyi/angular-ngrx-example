import { ActionCreator, createAction } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";

export function makeActionCreator(prefixer) {
  return <T extends string, P extends object>(
    name: T,
    config?: any
  ): ActionCreator<T, (props?: P) => P & TypedAction<T>> => {
    return createAction(prefixer(name), config);
  };
}
