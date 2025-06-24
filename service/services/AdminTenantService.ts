/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { AccessTokenResponse } from '../models/AccessTokenResponse';
import type { BaseUserResponse } from '../models/BaseUserResponse';
import type { CreateDatasourceForTenantRequest } from '../models/CreateDatasourceForTenantRequest';
import type { CreateTenantRequest } from '../models/CreateTenantRequest';
import type { GetTenantRateLimitsResponse } from '../models/GetTenantRateLimitsResponse';
import type { QueryCloudDataSourceResult } from '../models/QueryCloudDataSourceResult';
import type { QueryCloudDatasourceTemplatesResponse } from '../models/QueryCloudDatasourceTemplatesResponse';
import type { QueryDatasourceForTenantResponse } from '../models/QueryDatasourceForTenantResponse';
import type { QueryHCPsResponse } from '../models/QueryHCPsResponse';
import type { QueryTenantDeviceAssociationsResponse } from '../models/QueryTenantDeviceAssociationsResponse';
import type { QueryTenantsResponse } from '../models/QueryTenantsResponse';
import type { QueryTenantUsersResponse } from '../models/QueryTenantUsersResponse';
import type { ResourceIdResponse } from '../models/ResourceIdResponse';
import type { TenantResponse } from '../models/TenantResponse';
import type { UpdateTenantRequest } from '../models/UpdateTenantRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class AdminTenantService {
  protected readonly http = inject(HttpClient);
  /**
   * Creates a tenant.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public postApiAdminTenant({
    requestBody,
  }: {
    requestBody?: CreateTenantRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/admin/tenant',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get specific tenant information.
   * @returns TenantResponse Success
   * @throws ApiError
   */
  public getApiAdminTenant({
    id,
  }: {
    /**
     * Organization Id
     */
    id: number,
  }): Observable<TenantResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/tenant/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Update specific tenant information.
   * @returns void
   * @throws ApiError
   */
  public putApiAdminTenant({
    id,
    requestBody,
  }: {
    /**
     * Organization Id
     */
    id: number,
    requestBody?: UpdateTenantRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/admin/tenant/{id}',
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
   * Delete specific tenant.
   * @returns void
   * @throws ApiError
   */
  public deleteApiAdminTenant({
    id,
  }: {
    /**
     * Organization Id
     */
    id: number,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/admin/tenant/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Query tenants.
   * @returns QueryTenantsResponse Success
   * @throws ApiError
   */
  public getApiAdminTenants({
    q,
    isActive,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    q?: string,
    isActive?: boolean,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryTenantsResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/tenants',
      query: {
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
   * Associate system user to tenant.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public putApiAdminTenantSystemUserAssociation({
    organizationId,
    id,
  }: {
    /**
     * Organization Id
     */
    organizationId: number,
    /**
     * Organization User Id
     */
    id: number,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/admin/tenant/{organizationId}/system-user/{id}/association',
      path: {
        'organizationId': organizationId,
        'id': id,
      },
    });
  }
  /**
   * Disassociate system user from tenant.
   * @returns void
   * @throws ApiError
   */
  public deleteApiAdminTenantSystemUserAssociation({
    organizationId,
    id,
  }: {
    /**
     * Organization Id
     */
    organizationId: number,
    /**
     * Organization User Id
     */
    id: number,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/admin/tenant/{organizationId}/system-user/{id}/association',
      path: {
        'organizationId': organizationId,
        'id': id,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Query associations with system users for specific tenant.
   * @returns QueryTenantUsersResponse Success
   * @throws ApiError
   */
  public getApiAdminTenantSystemUsers({
    organizationId,
    q,
    isActive,
    userType,
    associated,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    organizationId: number,
    q?: string,
    isActive?: boolean,
    userType?: number,
    associated?: boolean,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryTenantUsersResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/tenant/{organizationId}/system-users',
      path: {
        'organizationId': organizationId,
      },
      query: {
        'Q': q,
        'IsActive': isActive,
        'UserType': userType,
        'Associated': associated,
        'Page': page,
        'PageSize': pageSize,
        'OrderBy': orderBy,
        'Direction': direction,
      },
    });
  }
  /**
   * Associate device to tenant.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public putApiAdminTenantDeviceAssociation({
    organizationId,
    deviceId,
  }: {
    organizationId: number,
    deviceId: number,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/admin/tenant/{organizationId}/device/{deviceId}/association',
      path: {
        'organizationId': organizationId,
        'deviceId': deviceId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Disassociate device from tenant.
   * @returns void
   * @throws ApiError
   */
  public deleteApiAdminTenantDeviceAssociation({
    organizationId,
    deviceId,
    isDeviceOk,
  }: {
    organizationId: number,
    deviceId: number,
    isDeviceOk?: boolean,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/admin/tenant/{organizationId}/device/{deviceId}/association',
      path: {
        'organizationId': organizationId,
        'deviceId': deviceId,
      },
      query: {
        'isDeviceOk': isDeviceOk,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Query devices for specific tenant.
   * @returns QueryTenantDeviceAssociationsResponse Success
   * @throws ApiError
   */
  public getApiAdminTenantDevices({
    organizationId,
    q,
    state,
    includeEndedAssociations,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    organizationId: number,
    q?: string,
    state?: number,
    includeEndedAssociations?: boolean,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryTenantDeviceAssociationsResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/tenant/{organizationId}/devices',
      path: {
        'organizationId': organizationId,
      },
      query: {
        'Q': q,
        'State': state,
        'IncludeEndedAssociations': includeEndedAssociations,
        'Page': page,
        'PageSize': pageSize,
        'OrderBy': orderBy,
        'Direction': direction,
      },
    });
  }
  /**
   * Query users for specific tenant.
   * @returns QueryTenantUsersResponse Success
   * @throws ApiError
   */
  public getApiAdminTenantUsers({
    organizationId,
    userType,
    q,
    isActive,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    organizationId: number,
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
      url: '/api/admin/tenant/{organizationId}/users',
      path: {
        'organizationId': organizationId,
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
   * Get user information.
   * @returns BaseUserResponse Success
   * @throws ApiError
   */
  public getApiAdminTenantUser({
    organizationId,
    organizationUserId,
  }: {
    organizationId: number,
    organizationUserId: number,
  }): Observable<BaseUserResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/tenant/{organizationId}/user/{organizationUserId}',
      path: {
        'organizationId': organizationId,
        'organizationUserId': organizationUserId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Query HCPs for specific tenant.
   * @returns QueryHCPsResponse Success
   * @throws ApiError
   */
  public getApiAdminTenantHcps({
    organizationId,
    q,
    userType,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    organizationId: number,
    q?: string,
    userType?: number,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryHCPsResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/tenant/{organizationId}/hcps',
      path: {
        'organizationId': organizationId,
      },
      query: {
        'Q': q,
        'UserType': userType,
        'Page': page,
        'PageSize': pageSize,
        'OrderBy': orderBy,
        'Direction': direction,
      },
    });
  }
  /**
   * Impersonate user.
   * @returns AccessTokenResponse Success
   * @throws ApiError
   */
  public postApiAdminTenantUserImpersonate({
    organizationId,
    organizationUserId,
  }: {
    organizationId: number,
    organizationUserId: number,
  }): Observable<AccessTokenResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/admin/tenant/{organizationId}/user/{organizationUserId}/impersonate',
      path: {
        'organizationId': organizationId,
        'organizationUserId': organizationUserId,
      },
    });
  }
  /**
   * Create datasource for specific tenant.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public postApiAdminTenantDatasource({
    organizationId,
    requestBody,
  }: {
    organizationId: number,
    requestBody?: CreateDatasourceForTenantRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/admin/tenant/{organizationId}/datasource',
      path: {
        'organizationId': organizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Delete datasource from tenant.
   * @returns void
   * @throws ApiError
   */
  public deleteApiAdminTenantDatasource({
    organizationId,
    datasourceId,
  }: {
    organizationId: number,
    datasourceId: number,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/admin/tenant/{organizationId}/datasource/{datasourceId}',
      path: {
        'organizationId': organizationId,
        'datasourceId': datasourceId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns QueryCloudDatasourceTemplatesResponse Success
   * @throws ApiError
   */
  public getApiAdminTenantCloudDatasourceTemplates({
    xOrganizationId,
  }: {
    xOrganizationId: any,
  }): Observable<QueryCloudDatasourceTemplatesResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/tenant/cloud-datasource-templates',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns string Success
   * @throws ApiError
   */
  public getApiAdminTenantCloudDatasourceTemplatesIds(): Observable<Array<string>> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/tenant/cloud-datasource-templates/ids',
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns QueryCloudDataSourceResult Success
   * @throws ApiError
   */
  public getApiAdminTenantCloudDatasourceTemplates1({
    dataSourceTemplateId,
    xOrganizationId,
  }: {
    dataSourceTemplateId: string,
    xOrganizationId: any,
  }): Observable<QueryCloudDataSourceResult> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/tenant/cloud-datasource-templates/{dataSourceTemplateId}',
      path: {
        'dataSourceTemplateId': dataSourceTemplateId,
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
   * Query datasources for specific tenant.
   * @returns QueryDatasourceForTenantResponse Success
   * @throws ApiError
   */
  public getApiAdminTenantDatasources({
    organizationId,
  }: {
    organizationId: number,
  }): Observable<QueryDatasourceForTenantResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/tenant/{organizationId}/datasources',
      path: {
        'organizationId': organizationId,
      },
    });
  }
  /**
   * Associates the datasource to a tenant
   * @returns void
   * @throws ApiError
   */
  public putApiAdminTenantDatasource({
    organizationId,
    datasourceKey,
  }: {
    organizationId: number,
    datasourceKey: string,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/admin/tenant/{organizationId}/datasource/{datasourceKey}',
      path: {
        'organizationId': organizationId,
        'datasourceKey': datasourceKey,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Resend invitation email for user.
   * @returns any Success
   * @throws ApiError
   */
  public postApiAdminTenantUserSendConfirmationEmail({
    organizationId,
    organizationUserId,
  }: {
    organizationId: number,
    organizationUserId: number,
  }): Observable<any> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/admin/tenant/{organizationId}/user/{organizationUserId}/send-confirmation-email',
      path: {
        'organizationId': organizationId,
        'organizationUserId': organizationUserId,
      },
    });
  }
  /**
   * Request password reset
   * @returns any Success
   * @throws ApiError
   */
  public postApiAdminTenantUserRequestPasswordReset({
    organizationId,
    organizationUserId,
  }: {
    organizationId: number,
    organizationUserId: number,
  }): Observable<any> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/admin/tenant/{organizationId}/user/{organizationUserId}/request-password-reset',
      path: {
        'organizationId': organizationId,
        'organizationUserId': organizationUserId,
      },
    });
  }
  /**
   * @returns GetTenantRateLimitsResponse Success
   * @throws ApiError
   */
  public getApiAdminTenant-)RateLimits({
    organizationId,
  }: {
    organizationId: number,
  }): Observable<GetTenantRateLimitsResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/tenant/{organizationId})/rate-limits',
      path: {
        'organizationId': organizationId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
}
