import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { InjectionToken } from "@angular/core";
import { IAppStore } from "./index";

export interface IAppState {
  loading: boolean;
}

export const appStoreFeature = "app";

const initialState: IAppState = {
  loading: true,
};

const reducer = createReducer(initialState);

export function appReducer(state, action) {
  return reducer(state, action);
}

export const appReducers: ActionReducerMap<any> = {
  [appStoreFeature]: appReducer,
  router: routerReducer,
};
export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<IAppStore>>(
  "App Reducers"
);
