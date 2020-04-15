import {
  Component,
  Inject,
  InjectionToken,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { IPageSettings } from "./base-page.interface";
import { Store } from "@ngrx/store";

export const PageSettingsToken = new InjectionToken<IPageSettings>(
  "Page Settings"
);

@Component({
  selector: "app-base-page",
  templateUrl: "./base-page.component.html",
  styleUrls: ["./base-page.component.scss"],
})
export class BasePageComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(PageSettingsToken) private settingsObject: IPageSettings,
    protected store: Store<any>
  ) {}

  ngOnInit() {
    this.store.dispatch(
      this.settingsObject.initActionCreator(
        this.settingsObject.initActionPayloadCreator &&
          this.settingsObject.initActionPayloadCreator()
      )
    );
  }

  ngOnDestroy() {
    this.store.dispatch(this.settingsObject.destroyActionCreator());
  }
}
