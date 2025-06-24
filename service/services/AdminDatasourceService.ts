/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { RemoteDatasourceActionResponse } from '../models/RemoteDatasourceActionResponse';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class AdminDatasourceService {
  protected readonly http = inject(HttpClient);
  /**
   * @returns RemoteDatasourceActionResponse Success
   * @throws ApiError
   */
  public getApiAdminDatasourceRemoteAction({
    datasourceKey,
  }: {
    datasourceKey: string,
  }): Observable<RemoteDatasourceActionResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/datasource/{datasourceKey}/remote-action',
      path: {
        'datasourceKey': datasourceKey,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
}
