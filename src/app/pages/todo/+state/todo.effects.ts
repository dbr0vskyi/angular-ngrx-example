import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { IAppState } from "../../../+state/app.reducer";
import { Store } from "@ngrx/store";

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private store: Store<IAppState>) {}
}
