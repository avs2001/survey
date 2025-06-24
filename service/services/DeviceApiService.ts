/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { SaveDeviceDataRequest } from '../models/SaveDeviceDataRequest';
import type { SaveDeviceDataResponse } from '../models/SaveDeviceDataResponse';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class DeviceApiService {
  protected readonly http = inject(HttpClient);
  /**
   * @returns void
   * @throws ApiError
   */
  public headApiDeviceOrganizationPatientAssociationExists({
    organizationId,
    id,
  }: {
    organizationId: number,
    id: number,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'HEAD',
      url: '/api/device/organization/{organizationId}/patient/{id}/association/exists',
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
   * @returns void
   * @throws ApiError
   */
  public putApiDeviceOrganizationPatientAssociation({
    organizationId,
    id,
  }: {
    organizationId: number,
    id: number,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/device/organization/{organizationId}/patient/{id}/association',
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
   * @returns void
   * @throws ApiError
   */
  public deleteApiDeviceOrganizationPatientAssociation({
    organizationId,
    id,
  }: {
    organizationId: number,
    id: number,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/device/organization/{organizationId}/patient/{id}/association',
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
   * Upload a session of data.
   * @returns SaveDeviceDataResponse Success
   * @throws ApiError
   */
  public postApiDeviceData({
    requestBody,
  }: {
    requestBody?: SaveDeviceDataRequest,
  }): Observable<SaveDeviceDataResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/device/data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
