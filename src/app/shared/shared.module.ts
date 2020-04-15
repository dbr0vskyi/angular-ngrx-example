import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseComponent } from "./base-component/base.component";
import { BasePageComponent } from "./base-page/base-page.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BaseComponent, BasePageComponent],
  exports: [BaseComponent, BasePageComponent],
})
export class SharedModule {}
