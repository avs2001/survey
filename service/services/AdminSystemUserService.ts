/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { BaseUserResponse } from '../models/BaseUserResponse';
import type { CreateSystemUserRequest } from '../models/CreateSystemUserRequest';
import type { QuerySystemUsersResponse } from '../models/QuerySystemUsersResponse';
import type { ResourceIdResponse } from '../models/ResourceIdResponse';
import type { UpdateSystemUserRequest } from '../models/UpdateSystemUserRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class AdminSystemUserService {
  protected readonly http = inject(HttpClient);
  /**
   * Creates a system user.
   * UserType can be one of the System User Types:
   * SuperAdmin = 1, ITAdmin = 2, ChiefSecurityOfficer = 3, SystemAdmin = 4, TechnicalSupport = 5, CustomerSupport = 6
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public postApiAdminSystemUser({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: CreateSystemUserRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/admin/system-user',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get the specific system user profile information.
   * @returns BaseUserResponse Success
   * @throws ApiError
   */
  public getApiAdminSystemUser({
    id,
  }: {
    /**
     * Organization User Id
     */
    id: number,
  }): Observable<BaseUserResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/system-user/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Update specific system user profile information.
   * @returns void
   * @throws ApiError
   */
  public putApiAdminSystemUser({
    id,
    requestBody,
  }: {
    /**
     * Organization User Id
     */
    id: number,
    requestBody?: UpdateSystemUserRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/admin/system-user/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Delete specific system user.
   * @returns void
   * @throws ApiError
   */
  public deleteApiAdminSystemUser({
    id,
  }: {
    /**
     * Organization User Id
     */
    id: number,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/admin/system-user/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Query system users.
   * @returns QuerySystemUsersResponse Success
   * @throws ApiError
   */
  public getApiAdminSystemUsers({
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
  }): Observable<QuerySystemUsersResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/system-users',
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
}
