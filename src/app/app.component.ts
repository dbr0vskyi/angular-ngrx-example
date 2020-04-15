import { Component, OnInit } from "@angular/core";
import { IAppStore } from "./+state";
import { Store } from "@ngrx/store";
import { appActions } from "./+state/app.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<IAppStore>) {}

  ngOnInit(): void {
    this.store.dispatch(appActions.init());
  }
}
