import { FactoryProvider } from "@angular/core";
import { environment } from "../../environments/environment";

export class ApiConfig {
  url: string;
}

export const ApiConfigProvider: FactoryProvider = {
  provide: ApiConfig,
  useFactory: () => environment.api,
};
