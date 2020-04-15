import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ApiConfig } from "../../providers/api-config.provider";
import { LoggerService } from "../common/logger.service";

export abstract class BaseApi {
  constructor(
    protected apiConfig: ApiConfig,
    protected http: HttpClient,
    protected loggerService: LoggerService
  ) {}

  protected url(path: string) {
    return this.apiConfig.url + path;
  }

  protected handleError = (error: HttpErrorResponse) => {
    this.loggerService.debug("HTTP Error:", JSON.stringify(error));

    return Promise.reject(error);
  };
}
