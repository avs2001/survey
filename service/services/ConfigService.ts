/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { DatasourcesConfigModel } from '../models/DatasourcesConfigModel';
import type { GetGlobalParameterConfigResponse } from '../models/GetGlobalParameterConfigResponse';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  protected readonly http = inject(HttpClient);
  /**
   * @returns DatasourcesConfigModel Success
   * @throws ApiError
   */
  public getApiConfigDatasources(): Observable<DatasourcesConfigModel> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/config/datasources',
    });
  }
  /**
   * @returns GetGlobalParameterConfigResponse Success
   * @throws ApiError
   */
  public getApiConfigGlobalParameters(): Observable<GetGlobalParameterConfigResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/config/global-parameters',
    });
  }
}
