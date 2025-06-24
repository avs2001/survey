/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { CreateHCPRequest } from '../models/CreateHCPRequest';
import type { HCPResponse } from '../models/HCPResponse';
import type { InviteHCPRequest } from '../models/InviteHCPRequest';
import type { QueryExternalHCPResponse } from '../models/QueryExternalHCPResponse';
import type { QueryHCPPatientsResponse } from '../models/QueryHCPPatientsResponse';
import type { QueryHCPsResponse } from '../models/QueryHCPsResponse';
import type { ResourceIdResponse } from '../models/ResourceIdResponse';
import type { UpdateHCPRequest } from '../models/UpdateHCPRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class TenantAdminHcpService {
  protected readonly http = inject(HttpClient);
  /**
   * Create an HCP.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public postApiTenantAdminHcp({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: CreateHCPRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/hcp',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Invite a HCP.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public postApiTenantAdminHcpInvite({
    externalUserId,
    xOrganizationId,
    requestBody,
  }: {
    externalUserId: string,
    xOrganizationId: any,
    requestBody?: InviteHCPRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/hcp/{externalUserId}/invite',
      path: {
        'externalUserId': externalUserId,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get HCP information.
   * @returns HCPResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminHcp({
    id,
    xOrganizationId,
  }: {
    /**
     * HCP Id.
     */
    id: number,
    xOrganizationId: any,
  }): Observable<HCPResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/hcp/{id}',
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
   * Update UCP information.
   * @returns void
   * @throws ApiError
   */
  public putApiTenantAdminHcp({
    id,
    xOrganizationId,
    requestBody,
  }: {
    /**
     * HCP Id.
     */
    id: number,
    xOrganizationId: any,
    requestBody?: UpdateHCPRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/tenant-admin/hcp/{id}',
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
   * Delete an HCP.
   * @returns void
   * @throws ApiError
   */
  public deleteApiTenantAdminHcp({
    id,
    xOrganizationId,
  }: {
    /**
     * HCP Id.
     */
    id: number,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/tenant-admin/hcp/{id}',
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
   * Get a list of HCPs.
   * @returns QueryHCPsResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminHcps({
    xOrganizationId,
    q,
    userType,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    xOrganizationId: any,
    q?: string,
    userType?: number,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryHCPsResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/hcps',
      headers: {
        'X-OrganizationId': xOrganizationId,
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
   * Query extenal HCPs
   * @returns QueryExternalHCPResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminHcpExternal({
    email,
    xOrganizationId,
  }: {
    email: string,
    xOrganizationId: any,
  }): Observable<QueryExternalHCPResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/hcp/external',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'email': email,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Associate Patient to HCP.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public putApiTenantAdminHcpPatientAssociation({
    id,
    patientId,
    xOrganizationId,
  }: {
    id: number,
    patientId: number,
    xOrganizationId: any,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/tenant-admin/hcp/{id}/patient/{patientId}/association',
      path: {
        'id': id,
        'patientId': patientId,
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
   * Disassociate Patient from HCP.
   * @returns void
   * @throws ApiError
   */
  public deleteApiTenantAdminHcpPatientAssociation({
    id,
    patientId,
    xOrganizationId,
  }: {
    id: number,
    patientId: number,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/tenant-admin/hcp/{id}/patient/{patientId}/association',
      path: {
        'id': id,
        'patientId': patientId,
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
   * Get a list of patients for an HCP
   * @returns QueryHCPPatientsResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminHcpPatients({
    id,
    xOrganizationId,
    q,
    isActive,
    unassigned,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    /**
     * HCP Id.
     */
    id: number,
    xOrganizationId: any,
    q?: string,
    isActive?: boolean,
    unassigned?: boolean,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryHCPPatientsResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/hcp/{id}/patients',
      path: {
        'id': id,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'Q': q,
        'IsActive': isActive,
        'Unassigned': unassigned,
        'Page': page,
        'PageSize': pageSize,
        'OrderBy': orderBy,
        'Direction': direction,
      },
    });
  }
}
