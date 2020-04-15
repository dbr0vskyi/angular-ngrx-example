import { InjectionToken, FactoryProvider } from "@angular/core";

export const WindowToken = new InjectionToken<Window>("window");

export const WindowProvider: FactoryProvider = {
  provide: WindowToken,
  useFactory: () => window,
};
