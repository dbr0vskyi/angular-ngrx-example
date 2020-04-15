import { makeActionCreator } from "../helpers/make-action-creator";
import { makePrefix } from "../helpers/make-prefix";

const makeAction = makeActionCreator(makePrefix("APP"));

export const appActions = {
  init: makeAction("Init"),
  initStore: makeAction("Init Store"),
};
