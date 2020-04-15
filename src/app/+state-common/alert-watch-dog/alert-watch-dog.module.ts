import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { AlertWatchDogEffects } from "./alert-watch-dog.effects";

@NgModule({
  imports: [EffectsModule.forFeature([AlertWatchDogEffects])],
})
export class AlertWatchDogModule {}
