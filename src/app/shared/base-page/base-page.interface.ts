import { ActionCreator } from "@ngrx/store";

export interface IPageSettings {
  initActionCreator: ActionCreator<any, any>;
  initActionPayloadCreator?: () => any;

  destroyActionCreator: ActionCreator<any, any>;
}
