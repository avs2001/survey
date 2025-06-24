/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { BaseUserResponse } from '../models/BaseUserResponse';
import type { SystemUserSelfUpdateRequest } from '../models/SystemUserSelfUpdateRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class SystemUserSystemUserApiService {
  protected readonly http = inject(HttpClient);
  /**
   * Returns the information for the system user that's making the request.
   * @returns BaseUserResponse Success
   * @throws ApiError
   */
  public getApiSystemUser(): Observable<BaseUserResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/system-user',
    });
  }
  /**
   * Updates the information of the system user that is making the request.
   * @returns void
   * @throws ApiError
   */
  public putApiSystemUser({
    requestBody,
  }: {
    requestBody?: SystemUserSelfUpdateRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/system-user',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
