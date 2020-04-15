import { makeActionCreator } from "../../helpers/make-action-creator";
import { makePrefix } from "../../helpers/make-prefix";

const makeAction = makeActionCreator(makePrefix("ALERT_WATCH_DOG"));

export const alertWatchDogActions = {};
