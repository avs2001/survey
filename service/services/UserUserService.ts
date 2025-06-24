/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { ProfileValueResponse } from '../models/ProfileValueResponse';
import type { UpdateProfileParameterRequest } from '../models/UpdateProfileParameterRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class UserUserService {
  protected readonly http = inject(HttpClient);
  /**
   * Set last login time for a specific user.
   * @returns any Success
   * @throws ApiError
   */
  public postApiUserLastlogin({
    identityProviderId,
    timestamp,
  }: {
    identityProviderId: string,
    timestamp?: number,
  }): Observable<any> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/user/{identityProviderId}/lastlogin',
      path: {
        'identityProviderId': identityProviderId,
      },
      query: {
        'timestamp': timestamp,
      },
    });
  }
  /**
   * Set locked status for specific user.
   * @returns any Success
   * @throws ApiError
   */
  public postApiUserLockedstatus({
    identityProviderId,
  }: {
    identityProviderId: string,
  }): Observable<any> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/user/{identityProviderId}/lockedstatus',
      path: {
        'identityProviderId': identityProviderId,
      },
    });
  }
  /**
   * Remove locked status for specific user.
   * @returns any Success
   * @throws ApiError
   */
  public deleteApiUserLockedstatus({
    organizationUserId,
    xOrganizationId,
  }: {
    organizationUserId: number,
    xOrganizationId: any,
  }): Observable<any> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/user/{organizationUserId}/lockedstatus',
      path: {
        'organizationUserId': organizationUserId,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
    });
  }
  /**
   * Remove pending activation status for specific user.s
   * @returns any Success
   * @throws ApiError
   */
  public deleteApiUserPendingstatus({
    identityProviderId,
  }: {
    identityProviderId: string,
  }): Observable<any> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/user/{identityProviderId}/pendingstatus',
      path: {
        'identityProviderId': identityProviderId,
      },
    });
  }
  /**
   * Reset your password.
   * @returns any Success
   * @throws ApiError
   */
  public postApiUserResetPassword({
    xOrganizationId,
  }: {
    xOrganizationId: any,
  }): Observable<any> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/user/reset-password',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
    });
  }
  /**
   * @returns void
   * @throws ApiError
   */
  public putApiUserVisualizationPreference({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody: UpdateProfileParameterRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/user/visualization-preference',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns ProfileValueResponse Success
   * @throws ApiError
   */
  public getApiUserVisualizationPreference({
    xOrganizationId,
  }: {
    xOrganizationId: any,
  }): Observable<ProfileValueResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/user/visualization-preference',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
}
