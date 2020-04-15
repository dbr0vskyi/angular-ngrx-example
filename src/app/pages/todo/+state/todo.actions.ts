import { makeActionCreator } from "../../../helpers/make-action-creator";
import { makePrefix } from "../../../helpers/make-prefix";
import { props } from "@ngrx/store";

const makeAction = makeActionCreator(makePrefix("TODO"));

export const todoActions = {
  init: makeAction("Init"),
  destroy: makeAction("Destroy"),

  loading: makeAction("Loading", props<{ loading: boolean }>()),
};
