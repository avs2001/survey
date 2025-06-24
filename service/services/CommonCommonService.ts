/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { CreateDeviceCommand } from '../models/CreateDeviceCommand';
import type { GetAggregationTypesAndIntervalsResponse } from '../models/GetAggregationTypesAndIntervalsResponse';
import type { GetRateLimitConfigurationResponse } from '../models/GetRateLimitConfigurationResponse';
import type { InfoResponse } from '../models/InfoResponse';
import type { ResourceIdResponse } from '../models/ResourceIdResponse';
import type { SendEmailRequest } from '../models/SendEmailRequest';
import type { UserTenantsResponse } from '../models/UserTenantsResponse';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class CommonCommonService {
  protected readonly http = inject(HttpClient);
  /**
   * Get a list of tenants the current user is associated with
   * @returns UserTenantsResponse Success.
   * @throws ApiError
   */
  public getApiCommonUserTenants(): Observable<UserTenantsResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/common/user-tenants',
    });
  }
  /**
   * Get the system translations and current user id, type and permissions
   * @returns InfoResponse Success.
   * @throws ApiError
   */
  public getApiCommonInfo({
    xOrganizationId,
  }: {
    xOrganizationId: any,
  }): Observable<InfoResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/common/info',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
    });
  }
  /**
   * Verifies if a tenant exists by its name
   * @returns void
   * @throws ApiError
   */
  public headApiCommonTenantExists({
    name,
  }: {
    name: string,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'HEAD',
      url: '/api/common/tenant/{name}/exists',
      path: {
        'name': name,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Checks if user exists by specific email.
   * @returns void
   * @throws ApiError
   */
  public headApiCommonUserEmailExists({
    email,
  }: {
    email: string,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'HEAD',
      url: '/api/common/user/email/{email}/exists',
      path: {
        'email': email,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Checks if user exists by specific username.
   * @returns void
   * @throws ApiError
   */
  public headApiCommonUserUsernameExists({
    username,
  }: {
    username: string,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'HEAD',
      url: '/api/common/user/username/{username}/exists',
      path: {
        'username': username,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Creates the device for Physician or Patient user type.
   * @returns ResourceIdResponse Success
   * @throws ApiError
   */
  public postApiCommonApplicationRegister({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: CreateDeviceCommand,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/common/application/register',
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
   * Request password reset by user email.
   * @returns any Success
   * @throws ApiError
   */
  public postApiCommonUserEmailRequestPasswordReset({
    email,
  }: {
    email: string,
  }): Observable<any> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/common/user/email/{email}/request-password-reset',
      path: {
        'email': email,
      },
    });
  }
  /**
   * @returns GetRateLimitConfigurationResponse Success
   * @throws ApiError
   */
  public optionsApiCommonTenantRateLimit({
    organizationId,
  }: {
    organizationId?: number,
  }): Observable<GetRateLimitConfigurationResponse> {
    return __request(OpenAPI, this.http, {
      method: 'OPTIONS',
      url: '/api/common/tenant/rate-limit',
      query: {
        'organizationId': organizationId,
      },
    });
  }
  /**
   * Returns the intervals and types for aggregation.
   * @returns GetAggregationTypesAndIntervalsResponse Success
   * @throws ApiError
   */
  public optionsApiCommonAggregationFilters(): Observable<GetAggregationTypesAndIntervalsResponse> {
    return __request(OpenAPI, this.http, {
      method: 'OPTIONS',
      url: '/api/common/aggregation/filters',
    });
  }
  /**
   * @returns void
   * @throws ApiError
   */
  public postApiCommonEmailSend({
    requestBody,
  }: {
    requestBody?: SendEmailRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/common/email/send',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `Not Found`,
      },
    });
  }
}
