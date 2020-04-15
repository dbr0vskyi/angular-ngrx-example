import { FactoryProvider } from "@angular/core";
import { environment } from "../../environments/environment";

export class LoggerConfig {
  level: number;
}

export const LoggerConfigProvider: FactoryProvider = {
  provide: LoggerConfig,
  useFactory: () => environment.logger,
};
