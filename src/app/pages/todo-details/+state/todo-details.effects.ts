import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IAppStore } from "../../../+state";

@Injectable()
export class TodoDetailsEffects {
  constructor(private actions$: Actions, private store: Store<IAppStore>) {}
}
