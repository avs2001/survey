/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { QueryNumericAggregatedDataResponse } from '../models/QueryNumericAggregatedDataResponse';
import type { QueryParameterValuesBinningResponse } from '../models/QueryParameterValuesBinningResponse';
import type { QueryParameterValuesResponse } from '../models/QueryParameterValuesResponse';
import type { QueryParameterValuesSummaryResponse } from '../models/QueryParameterValuesSummaryResponse';
import type { SaveDeviceDataRequest } from '../models/SaveDeviceDataRequest';
import type { SaveDeviceDataResponse } from '../models/SaveDeviceDataResponse';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class TenantAdminParameterValuesService {
  protected readonly http = inject(HttpClient);
  /**
   * Query parameter values.
   * @returns QueryParameterValuesResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminParameterValues({
    xOrganizationId,
    patientId,
    deviceId,
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
    xOrganizationId: any,
    patientId?: number,
    deviceId?: number,
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
      url: '/api/tenant-admin/parameter-values',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'PatientId': patientId,
        'DeviceId': deviceId,
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
   * @returns SaveDeviceDataResponse Success
   * @throws ApiError
   */
  public postApiTenantAdminParameterValues({
    requestBody,
  }: {
    requestBody?: SaveDeviceDataRequest,
  }): Observable<SaveDeviceDataResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/parameter-values',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns QueryParameterValuesBinningResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminParameterValuesBinning({
    parameterKey,
    xOrganizationId,
    organizationUserId,
    deviceId,
    reference,
    startTimestamp,
    endTimestamp,
    totalDataPoints,
    zoomLevel,
  }: {
    parameterKey: string,
    xOrganizationId: any,
    organizationUserId?: number,
    deviceId?: number,
    reference?: string,
    startTimestamp?: number,
    endTimestamp?: number,
    totalDataPoints?: number,
    zoomLevel?: number,
  }): Observable<QueryParameterValuesBinningResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/parameter-values-binning',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'organizationUserId': organizationUserId,
        'deviceId': deviceId,
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
   * Download the Parameter Values in Csv format
   * @returns binary Success
   * @throws ApiError
   */
  public getApiTenantAdminParameterValuesCsv({
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
      url: '/api/tenant-admin/parameter-values-csv',
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
   * Query parameter values summary report.
   * @returns QueryParameterValuesSummaryResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminParameterValuesSummary({
    xOrganizationId,
    patientId,
    deviceId,
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
    xOrganizationId: any,
    patientId?: number,
    deviceId?: number,
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
      url: '/api/tenant-admin/parameter-values-summary',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'PatientId': patientId,
        'DeviceId': deviceId,
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
   * @returns QueryNumericAggregatedDataResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminAggregatedNumericParameters({
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
      url: '/api/tenant-admin/aggregated-numeric-parameters',
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
}
