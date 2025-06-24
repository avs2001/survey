/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { BaseParameterListResponse } from '../models/BaseParameterListResponse';
import type { HCPResponse } from '../models/HCPResponse';
import type { HCPSelfUpdateRequest } from '../models/HCPSelfUpdateRequest';
import type { PatientResponse } from '../models/PatientResponse';
import type { QueryDatasourceForTenantResponse } from '../models/QueryDatasourceForTenantResponse';
import type { QueryDataSourceResult } from '../models/QueryDataSourceResult';
import type { QueryHCPPatientsResponse } from '../models/QueryHCPPatientsResponse';
import type { QueryNumericAggregatedDataResponse } from '../models/QueryNumericAggregatedDataResponse';
import type { QueryParameterValuesBinningResponse } from '../models/QueryParameterValuesBinningResponse';
import type { QueryParameterValuesResponse } from '../models/QueryParameterValuesResponse';
import type { QueryParameterValuesSummaryResponse } from '../models/QueryParameterValuesSummaryResponse';
import type { SaveDataResponse } from '../models/SaveDataResponse';
import type { SaveParameterDataRequest } from '../models/SaveParameterDataRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class HcpHcpApiService {
  protected readonly http = inject(HttpClient);
  /**
   * Gets the current physician user profile data.
   * @returns HCPResponse Success
   * @throws ApiError
   */
  public getApiHcp({
    xOrganizationId,
  }: {
    xOrganizationId: any,
  }): Observable<HCPResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/hcp',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
    });
  }
  /**
   * Updates the current physician user profile data.
   * @returns void
   * @throws ApiError
   */
  public putApiHcp({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: HCPSelfUpdateRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/hcp',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Query the patients for current physician.
   * @returns QueryHCPPatientsResponse Success
   * @throws ApiError
   */
  public getApiHcpPatients({
    xOrganizationId,
    q,
    isActive,
    unassigned,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
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
      url: '/api/hcp/patients',
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
  /**
   * Get the patient information associated to current physician.
   * @returns PatientResponse Success
   * @throws ApiError
   */
  public getApiHcpPatient({
    patientId,
    xOrganizationId,
  }: {
    patientId: number,
    xOrganizationId: any,
  }): Observable<PatientResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/hcp/patient/{patientId}',
      path: {
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
   * Query the parameter values for specific patient.
   * @returns QueryParameterValuesResponse Success
   * @throws ApiError
   */
  public getApiHcpPatientValues({
    patientId,
    xOrganizationId,
    parameterKey,
    reference,
    page,
    pageSize,
    orderBy,
    direction,
    startTimestamp,
    endTimestamp,
    q,
  }: {
    patientId: number,
    xOrganizationId: any,
    parameterKey?: Array<string>,
    reference?: string,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
    startTimestamp?: number,
    endTimestamp?: number,
    q?: string,
  }): Observable<QueryParameterValuesResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/hcp/patient/{patientId}/values',
      path: {
        'patientId': patientId,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'ParameterKey': parameterKey,
        'Reference': reference,
        'Page': page,
        'PageSize': pageSize,
        'OrderBy': orderBy,
        'Direction': direction,
        'StartTimestamp': startTimestamp,
        'EndTimestamp': endTimestamp,
        'Q': q,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Query Patient parameter values summary.
   * @returns QueryParameterValuesSummaryResponse Success
   * @throws ApiError
   */
  public getApiHcpPatientParameterValuesSummary({
    patientId,
    xOrganizationId,
    parameterKey,
    reference,
    page,
    pageSize,
    orderBy,
    direction,
    startTimestamp,
    endTimestamp,
    q,
  }: {
    patientId: number,
    xOrganizationId: any,
    parameterKey?: Array<string>,
    reference?: string,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
    startTimestamp?: number,
    endTimestamp?: number,
    q?: string,
  }): Observable<QueryParameterValuesSummaryResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/hcp/patient/{patientId}/parameter-values-summary',
      path: {
        'patientId': patientId,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'ParameterKey': parameterKey,
        'Reference': reference,
        'Page': page,
        'PageSize': pageSize,
        'OrderBy': orderBy,
        'Direction': direction,
        'StartTimestamp': startTimestamp,
        'EndTimestamp': endTimestamp,
        'Q': q,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Save the parameter data for specific patient.
   * @returns SaveDataResponse Success
   * @throws ApiError
   */
  public postApiHcpPatientData({
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
      url: '/api/hcp/patient/{organizationUserId}/data',
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
  /**
   * Query all datasources for your tenant.
   * @returns QueryDatasourceForTenantResponse Success
   * @throws ApiError
   */
  public getApiHcpDatasources({
    xOrganizationId,
  }: {
    xOrganizationId: any,
  }): Observable<QueryDatasourceForTenantResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/hcp/datasources',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Get datasource for your tenant
   * @returns QueryDataSourceResult Success
   * @throws ApiError
   */
  public getApiHcpDatasource({
    datasourceId,
    xOrganizationId,
  }: {
    datasourceId: number,
    xOrganizationId: any,
  }): Observable<QueryDataSourceResult> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/hcp/datasource/{datasourceId}',
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
   * Download the Parameter Values in Csv format
   * @returns binary Success
   * @throws ApiError
   */
  public getApiHcpParameterValuesCsv({
    xOrganizationId,
    patientId,
    deviceId,
    parameterKey,
    reference,
    startTimestamp,
    endTimestamp,
  }: {
    xOrganizationId: any,
    patientId?: number,
    deviceId?: number,
    parameterKey?: Array<string>,
    reference?: string,
    startTimestamp?: number,
    endTimestamp?: number,
  }): Observable<Blob> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/hcp/parameter-values-csv',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'PatientId': patientId,
        'DeviceId': deviceId,
        'ParameterKey': parameterKey,
        'Reference': reference,
        'StartTimestamp': startTimestamp,
        'EndTimestamp': endTimestamp,
      },
    });
  }
  /**
   * @returns QueryNumericAggregatedDataResponse Success
   * @throws ApiError
   */
  public getApiHcpAggregatedNumericParameters({
    interval,
    aggregationType,
    parameterKey,
    startTimestamp,
    endTimestamp,
    patientId,
    deviceId,
  }: {
    interval: string,
    aggregationType: string,
    parameterKey: string,
    startTimestamp?: number,
    endTimestamp?: number,
    patientId?: number,
    deviceId?: number,
  }): Observable<QueryNumericAggregatedDataResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/hcp/aggregated-numeric-parameters',
      query: {
        'StartTimestamp': startTimestamp,
        'EndTimestamp': endTimestamp,
        'Interval': interval,
        'AggregationType': aggregationType,
        'ParameterKey': parameterKey,
        'PatientId': patientId,
        'DeviceId': deviceId,
      },
    });
  }
  /**
   * @returns QueryParameterValuesBinningResponse Success
   * @throws ApiError
   */
  public getApiHcpPatientValuesBinning({
    organizationUserId,
    parameterKey,
    xOrganizationId,
    reference,
    startTimestamp,
    endTimestamp,
    totalDataPoints,
    zoomLevel,
  }: {
    organizationUserId: number,
    parameterKey: string,
    xOrganizationId: any,
    reference?: string,
    startTimestamp?: number,
    endTimestamp?: number,
    totalDataPoints?: number,
    zoomLevel?: number,
  }): Observable<QueryParameterValuesBinningResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/hcp/patient/{organizationUserId}/values-binning',
      path: {
        'organizationUserId': organizationUserId,
      },
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'ParameterKey': parameterKey,
        'Reference': reference,
        'StartTimestamp': startTimestamp,
        'EndTimestamp': endTimestamp,
        'TotalDataPoints': totalDataPoints,
        'ZoomLevel': zoomLevel,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns BaseParameterListResponse Success
   * @throws ApiError
   */
  public getApiHcpPatientParameters({
    id,
    xOrganizationId,
  }: {
    id: number,
    xOrganizationId: any,
  }): Observable<BaseParameterListResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/hcp/patient/{id}/parameters',
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
}
