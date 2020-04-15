import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WindowProvider } from "./providers/window.provider";
import { ApiConfigProvider } from "./providers/api-config.provider";
import { LoggerConfigProvider } from "./providers/logger-config.provider";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { REDUCERS_TOKEN } from "./+state/app.reducer";
import { AppEffects } from "./+state/app.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(REDUCERS_TOKEN, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AppEffects]),
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 150 })
      : [],
  ],
  providers: [WindowProvider, ApiConfigProvider, LoggerConfigProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
