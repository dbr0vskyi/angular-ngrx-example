import { Inject, Injectable } from "@angular/core";
import { WindowToken } from "../../providers/window.provider";
import { LoggerConfig } from "../../providers/logger-config.provider";

// To be on the safe side, let's use explicit numbers
export enum ELogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  LOG = 3,
  DEBUG = 4,
}

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  private readonly logLevel: ELogLevel;
  private readonly logger: {
    log: (...args: any[]) => void;
    error: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
  };

  constructor(
    private loggerConfig: LoggerConfig,
    @Inject(WindowToken) private window: Window
  ) {
    this.logLevel = loggerConfig.level as ELogLevel;
    this.logger = window.console;
  }

  private isLevel(level: ELogLevel) {
    return this.logLevel >= level;
  }

  error(...params) {
    if (this.isLevel(ELogLevel.ERROR)) {
      this.logger.error(...params);
    }
  }

  warn(...params) {
    if (this.isLevel(ELogLevel.WARN)) {
      this.logger.warn(...params);
    }
  }

  info(...params) {
    if (this.isLevel(ELogLevel.INFO)) {
      this.logger.info(...params);
    }
  }

  log(...params) {
    if (this.isLevel(ELogLevel.LOG)) {
      this.logger.log(...params);
    }
  }

  debug(...params) {
    if (this.isLevel(ELogLevel.DEBUG)) {
      this.logger.debug(...params);
    }
  }
}
