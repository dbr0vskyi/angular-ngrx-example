import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-base-component",
  templateUrl: "./base.component.html",
  styleUrls: ["./base.component.scss"],
})
export class BaseComponent implements OnDestroy {
  protected onDestroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
