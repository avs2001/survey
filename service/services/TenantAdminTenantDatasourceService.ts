/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { CreateCloudDatasourceForTenantRequest } from '../models/CreateCloudDatasourceForTenantRequest';
import type { CreateDatasourceForTenantRequest } from '../models/CreateDatasourceForTenantRequest';
import type { QueryDatasourceForTenantResponse } from '../models/QueryDatasourceForTenantResponse';
import type { QueryDataSourceResult } from '../models/QueryDataSourceResult';
import type { RemoteDatasourceActionResponse } from '../models/RemoteDatasourceActionResponse';
import type { ResourceIdResponse } from '../models/ResourceIdResponse';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class TenantAdminTenantDatasourceService {
  protected readonly http = inject(HttpClient);
  /**
   * Create datasource for tenant.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public postApiTenantAdminDatasource({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: CreateDatasourceForTenantRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/datasource',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public postApiTenantAdminCloudDatasource({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: CreateCloudDatasourceForTenantRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/cloud-datasource',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Query all datasources for your tenant.
   * @returns QueryDatasourceForTenantResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminDatasources({
    xOrganizationId,
  }: {
    xOrganizationId: any,
  }): Observable<QueryDatasourceForTenantResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/datasources',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Get datasource for your tenant.
   * @returns QueryDataSourceResult Success
   * @throws ApiError
   */
  public getApiTenantAdminDatasource({
    datasourceId,
    xOrganizationId,
  }: {
    datasourceId: number,
    xOrganizationId: any,
  }): Observable<QueryDataSourceResult> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/datasource/{datasourceId}',
      path: {
        'datasourceId': datasourceId,
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
   * Delete a datasource for your tenant.
   * @returns void
   * @throws ApiError
   */
  public deleteApiTenantAdminDatasource({
    datasourceId,
    xOrganizationId,
  }: {
    datasourceId: number,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/tenant-admin/datasource/{datasourceId}',
      path: {
        'datasourceId': datasourceId,
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
   * @returns RemoteDatasourceActionResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminDatasourceRemoteAction({
    datasourceKey,
    xOrganizationId,
  }: {
    datasourceKey: string,
    xOrganizationId: any,
  }): Observable<RemoteDatasourceActionResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/datasource/{datasourceKey}/remote-action',
      path: {
        'datasourceKey': datasourceKey,
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
   * Associates the datasource to a tenant
   * @returns void
   * @throws ApiError
   */
  public putApiTenantAdminDatasource({
    datasourceKey,
    xOrganizationId,
  }: {
    datasourceKey: string,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/tenant-admin/datasource/{datasourceKey}',
      path: {
        'datasourceKey': datasourceKey,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
}
