import { Injectable } from "@angular/core";
import { IAppStore } from "./index";
import { Store } from "@ngrx/store";
import { Actions } from "@ngrx/effects";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private store: Store<IAppStore>) {}
}
