/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { BaseParameterListResponse } from '../models/BaseParameterListResponse';
import type { CreateDeviceForPatientRequest } from '../models/CreateDeviceForPatientRequest';
import type { GetDeviceStatusResponse } from '../models/GetDeviceStatusResponse';
import type { GetPatientDevicesResponse } from '../models/GetPatientDevicesResponse';
import type { PatientClouddataSourceResult } from '../models/PatientClouddataSourceResult';
import type { PatientResponse } from '../models/PatientResponse';
import type { QueryParameterValuesBinningResponse } from '../models/QueryParameterValuesBinningResponse';
import type { QueryParameterValuesResponse } from '../models/QueryParameterValuesResponse';
import type { QueryPatientDatasourceForTenantResponse } from '../models/QueryPatientDatasourceForTenantResponse';
import type { ResourceIdResponse } from '../models/ResourceIdResponse';
import type { SaveDataResponse } from '../models/SaveDataResponse';
import type { SaveParameterDataRequest } from '../models/SaveParameterDataRequest';
import type { UpdatePatientRequest } from '../models/UpdatePatientRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class PatientPatientApiService {
  protected readonly http = inject(HttpClient);
  /**
   * Save parameters data for current patient.
   * @returns SaveDataResponse Success
   * @throws ApiError
   */
  public postApiPatientData({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: SaveParameterDataRequest,
  }): Observable<SaveDataResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/patient/data',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Query the parameter values for current patient.
   * @returns QueryParameterValuesResponse Success
   * @throws ApiError
   */
  public getApiPatientValues({
    xOrganizationId,
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
      url: '/api/patient/values',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
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
   * @returns QueryParameterValuesBinningResponse Success
   * @throws ApiError
   */
  public getApiPatientValuesBinning({
    parameterKey,
    xOrganizationId,
    reference,
    startTimestamp,
    endTimestamp,
    totalDataPoints,
    zoomLevel,
  }: {
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
      url: '/api/patient/values-binning',
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
   * Get Device status for a Patient.
   * @returns GetDeviceStatusResponse Success
   * @throws ApiError
   */
  public getApiPatientDeviceStatus({
    serialNumber,
    xOrganizationId,
  }: {
    serialNumber: string,
    xOrganizationId: any,
  }): Observable<GetDeviceStatusResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/patient/device/{serialNumber}/status',
      path: {
        'serialNumber': serialNumber,
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
   * @returns ResourceIdResponse Success
   * @throws ApiError
   */
  public postApiPatientRegisterDevice({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: CreateDeviceForPatientRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/patient/register-device',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns void
   * @throws ApiError
   */
  public deleteApiPatientDevice({
    id,
    xOrganizationId,
  }: {
    id: number,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/patient/device/{id}',
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
   * @returns QueryPatientDatasourceForTenantResponse Success
   * @throws ApiError
   */
  public getApiPatientDatasources({
    xOrganizationId,
    isCloudDatasource,
  }: {
    xOrganizationId: any,
    isCloudDatasource?: boolean,
  }): Observable<QueryPatientDatasourceForTenantResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/patient/datasources',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'isCloudDatasource': isCloudDatasource,
      },
    });
  }
  /**
   * @returns PatientClouddataSourceResult Success
   * @throws ApiError
   */
  public getApiPatientDatasources1({
    id,
    xOrganizationId,
  }: {
    id: number,
    xOrganizationId: any,
  }): Observable<PatientClouddataSourceResult> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/patient/datasources/{id}',
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
   * @returns BaseParameterListResponse Success
   * @throws ApiError
   */
  public getApiPatientParameters({
    xOrganizationId,
  }: {
    xOrganizationId: any,
  }): Observable<BaseParameterListResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/patient/parameters',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns PatientResponse Success
   * @throws ApiError
   */
  public getApiPatient({
    xOrganizationId,
  }: {
    xOrganizationId: any,
  }): Observable<PatientResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/patient',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns void
   * @throws ApiError
   */
  public putApiPatient({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: UpdatePatientRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/patient',
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
   * @returns GetPatientDevicesResponse Success
   * @throws ApiError
   */
  public getApiPatientPatientDevices({
    xOrganizationId,
    onlyValid,
  }: {
    xOrganizationId: any,
    onlyValid?: boolean,
  }): Observable<GetPatientDevicesResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/patient/patient/devices',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      query: {
        'onlyValid': onlyValid,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
}
