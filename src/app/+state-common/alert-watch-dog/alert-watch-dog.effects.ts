import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions } from "@ngrx/effects";
import { IAppStore } from "../../+state";

@Injectable()
export class AlertWatchDogEffects {
  constructor(private actions$: Actions, private store: Store<IAppStore>) {}
}
