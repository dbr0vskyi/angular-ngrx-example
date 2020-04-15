import { Injectable } from "@angular/core";
import { BaseApi } from "./base-api.abstract";

@Injectable({
  providedIn: "root",
})
export class TodoApiService extends BaseApi {}
