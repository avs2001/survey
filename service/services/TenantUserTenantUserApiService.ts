/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { BaseUserResponse } from '../models/BaseUserResponse';
import type { TenantUserSelfUpdateRequest } from '../models/TenantUserSelfUpdateRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class TenantUserTenantUserApiService {
  protected readonly http = inject(HttpClient);
  /**
   * Get your profile information.
   * @returns BaseUserResponse Success
   * @throws ApiError
   */
  public getApiTenantAdmin({
    xOrganizationId,
  }: {
    xOrganizationId: any,
  }): Observable<BaseUserResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
    });
  }
  /**
   * Update your profile information.
   * @returns void
   * @throws ApiError
   */
  public putApiTenantAdmin({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: TenantUserSelfUpdateRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/tenant-admin',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
