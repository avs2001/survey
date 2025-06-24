/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { CreateFullPatientRequest } from '../models/CreateFullPatientRequest';
import type { CreatePatientRequest } from '../models/CreatePatientRequest';
import type { PatientResponse } from '../models/PatientResponse';
import type { QueryPatientHCPsResponse } from '../models/QueryPatientHCPsResponse';
import type { QueryPatientsResponse } from '../models/QueryPatientsResponse';
import type { QueryTemporaryPatientsResponse } from '../models/QueryTemporaryPatientsResponse';
import type { ResourceIdResponse } from '../models/ResourceIdResponse';
import type { SaveDataResponse } from '../models/SaveDataResponse';
import type { SaveParameterDataRequest } from '../models/SaveParameterDataRequest';
import type { UpdatePatientRequest } from '../models/UpdatePatientRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class TenantAdminPatientService {
  protected readonly http = inject(HttpClient);
  /**
   * Create a patient.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public postApiTenantAdminPatient({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: CreatePatientRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/patient',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Create a patient with full profile information.
   * @returns void
   * @throws ApiError
   */
  public postApiTenantAdminPatient1({
    id,
    xOrganizationId,
    requestBody,
  }: {
    id: number,
    xOrganizationId: any,
    requestBody?: CreateFullPatientRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/patient/{id}',
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
   * Get patient information.
   * @returns PatientResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminPatient({
    id,
    xOrganizationId,
  }: {
    /**
     * Patient Id.
     */
    id: number,
    xOrganizationId: any,
  }): Observable<PatientResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/patient/{id}',
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
   * Update information for a patient
   * @returns void
   * @throws ApiError
   */
  public putApiTenantAdminPatient({
    id,
    xOrganizationId,
    requestBody,
  }: {
    /**
     * Patient Id.
     */
    id: number,
    xOrganizationId: any,
    requestBody?: UpdatePatientRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/tenant-admin/patient/{id}',
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
   * Delete a patient.
   * @returns void
   * @throws ApiError
   */
  public deleteApiTenantAdminPatient({
    id,
    xOrganizationId,
  }: {
    /**
     * Patient Id.
     */
    id: number,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/tenant-admin/patient/{id}',
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
   * Check if a patient exists by external patient id.
   * @returns void
   * @throws ApiError
   */
  public headApiTenantAdminPatientExists({
    patientExternalId,
    xOrganizationId,
  }: {
    patientExternalId: string,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'HEAD',
      url: '/api/tenant-admin/patient/{patientExternalId}/exists',
      path: {
        'patientExternalId': patientExternalId,
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
   * Get a list of patients.
   * @returns QueryPatientsResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminPatients({
    xOrganizationId,
    isActive,
    q,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    xOrganizationId: any,
    isActive?: boolean,
    q?: string,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryPatientsResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/patients',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'IsActive': isActive,
        'Q': q,
        'Page': page,
        'PageSize': pageSize,
        'OrderBy': orderBy,
        'Direction': direction,
      },
    });
  }
  /**
   * Query temporary patients.
   * @returns QueryTemporaryPatientsResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminPatientsTemporary({
    xOrganizationId,
    isActive,
    q,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    xOrganizationId: any,
    isActive?: boolean,
    q?: string,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryTemporaryPatientsResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/patients/temporary',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'IsActive': isActive,
        'Q': q,
        'Page': page,
        'PageSize': pageSize,
        'OrderBy': orderBy,
        'Direction': direction,
      },
    });
  }
  /**
   * Query associated HCPs to patient.
   * @returns QueryPatientHCPsResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminPatientHcps({
    id,
    xOrganizationId,
    q,
    userType,
    unassigned,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    id: number,
    xOrganizationId: any,
    q?: string,
    userType?: number,
    unassigned?: boolean,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryPatientHCPsResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/patient/{id}/hcps',
      path: {
        'id': id,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'Q': q,
        'UserType': userType,
        'Unassigned': unassigned,
        'Page': page,
        'PageSize': pageSize,
        'OrderBy': orderBy,
        'Direction': direction,
      },
    });
  }
  /**
   * Associate a device to a patient.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public putApiTenantAdminPatientDeviceAssociation({
    id,
    deviceId,
    xOrganizationId,
  }: {
    /**
     * Patient Id.
     */
    id: number,
    /**
     * Device Id.
     */
    deviceId: number,
    xOrganizationId: any,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/tenant-admin/patient/{id}/device/{deviceId}/association',
      path: {
        'id': id,
        'deviceId': deviceId,
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
   * Disassociate a device from a patient.
   * @returns void
   * @throws ApiError
   */
  public deleteApiTenantAdminPatientDeviceAssociation({
    id,
    deviceId,
    xOrganizationId,
  }: {
    /**
     * Patient Id.
     */
    id: number,
    /**
     * Device Id.
     */
    deviceId: number,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/tenant-admin/patient/{id}/device/{deviceId}/association',
      path: {
        'id': id,
        'deviceId': deviceId,
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
   * @returns SaveDataResponse Success
   * @throws ApiError
   */
  public postApiTenantAdminPatientData({
    organizationUserId,
    xOrganizationId,
    requestBody,
  }: {
    organizationUserId: number,
    xOrganizationId: any,
    requestBody?: SaveParameterDataRequest,
  }): Observable<SaveDataResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/patient/{organizationUserId}/data',
      path: {
        'organizationUserId': organizationUserId,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
