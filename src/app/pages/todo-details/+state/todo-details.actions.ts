import { makeActionCreator } from "../../../helpers/make-action-creator";
import { makePrefix } from "../../../helpers/make-prefix";

const makeAction = makeActionCreator(makePrefix("TODO_DETAILS"));

export const todoDetailsActions = {
  init: makeAction("Init"),
  destroy: makeAction("Destroy"),
};
