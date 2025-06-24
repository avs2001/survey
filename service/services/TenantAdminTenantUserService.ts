/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { BaseUserResponse } from '../models/BaseUserResponse';
import type { CreateTenantUserRequest } from '../models/CreateTenantUserRequest';
import type { QueryTenantUsersResponse } from '../models/QueryTenantUsersResponse';
import type { ResourceIdResponse } from '../models/ResourceIdResponse';
import type { TenantResponse } from '../models/TenantResponse';
import type { UpdateTenantRequest } from '../models/UpdateTenantRequest';
import type { UpdateTenantUserRequest } from '../models/UpdateTenantUserRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class TenantAdminTenantUserService {
  protected readonly http = inject(HttpClient);
  /**
   * Create a tenant user.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public postApiTenantAdminTenantUser({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: CreateTenantUserRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/tenant-user',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get the information for a tenant user.
   * @returns BaseUserResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminTenantUser({
    id,
    xOrganizationId,
  }: {
    /**
     * User Id.
     */
    id: number,
    xOrganizationId: any,
  }): Observable<BaseUserResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/tenant-user/{id}',
      path: {
        'id': id,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Update the information for a tenant user.
   * @returns void
   * @throws ApiError
   */
  public putApiTenantAdminTenantUser({
    id,
    xOrganizationId,
    requestBody,
  }: {
    /**
     * User Id.
     */
    id: number,
    xOrganizationId: any,
    requestBody?: UpdateTenantUserRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/tenant-admin/tenant-user/{id}',
      path: {
        'id': id,
      },
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
   * Delete a tenant user.
   * @returns void
   * @throws ApiError
   */
  public deleteApiTenantAdminTenantUser({
    id,
    xOrganizationId,
  }: {
    /**
     * User Id.
     */
    id: number,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/tenant-admin/tenant-user/{id}',
      path: {
        'id': id,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Query tenant users.
   * @returns QueryTenantUsersResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminTenantUsers({
    xOrganizationId,
    userType,
    q,
    isActive,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    xOrganizationId: any,
    userType?: number,
    q?: string,
    isActive?: boolean,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryTenantUsersResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/tenant-users',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'UserType': userType,
        'Q': q,
        'IsActive': isActive,
        'Page': page,
        'PageSize': pageSize,
        'OrderBy': orderBy,
        'Direction': direction,
      },
    });
  }
  /**
   * Get information for your tenant.
   * @returns TenantResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminTenant({
    xOrganizationId,
  }: {
    xOrganizationId: any,
  }): Observable<TenantResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/tenant',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
    });
  }
  /**
   * Update your tenant.
   * @returns void
   * @throws ApiError
   */
  public putApiTenantAdminTenant({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: UpdateTenantRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/tenant-admin/tenant',
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
   * Resend invitation email for specific user.
   * @returns any Success
   * @throws ApiError
   */
  public postApiTenantAdminTenantUserSendConfirmationEmail({
    organizationUserId,
    xOrganizationId,
  }: {
    organizationUserId: number,
    xOrganizationId: any,
  }): Observable<any> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/tenant/user/{organizationUserId}/send-confirmation-email',
      path: {
        'organizationUserId': organizationUserId,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
    });
  }
  /**
   * Request password reset
   * @returns any Success
   * @throws ApiError
   */
  public postApiTenantAdminTenantUserRequestPasswordReset({
    organizationUserId,
    xOrganizationId,
  }: {
    organizationUserId: number,
    xOrganizationId: any,
  }): Observable<any> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/tenant/user/{organizationUserId}/request-password-reset',
      path: {
        'organizationUserId': organizationUserId,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
    });
  }
}
