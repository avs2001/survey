/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { CertificateAndKeys } from '../models/CertificateAndKeys';
import type { CreateDeviceForTenantRequest } from '../models/CreateDeviceForTenantRequest';
import type { CreateDeviceResponse } from '../models/CreateDeviceResponse';
import type { DeviceResponse } from '../models/DeviceResponse';
import type { QueryDevicesResponse } from '../models/QueryDevicesResponse';
import type { SaveDeviceDataRequest } from '../models/SaveDeviceDataRequest';
import type { SaveDeviceDataResponse } from '../models/SaveDeviceDataResponse';
import type { UpdateDeviceRequest } from '../models/UpdateDeviceRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class TenantAdminTenantDeviceService {
  protected readonly http = inject(HttpClient);
  /**
   * Check if serial number exists.
   * @returns void
   * @throws ApiError
   */
  public headApiTenantAdminDeviceSerialnumberExists({
    serialNumber,
  }: {
    serialNumber: string,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'HEAD',
      url: '/api/tenant-admin/device/serialnumber/{serialNumber}/exists',
      path: {
        'serialNumber': serialNumber,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * Get a device.
   * @returns DeviceResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminDevice({
    id,
    xOrganizationId,
  }: {
    /**
     * Device Id.
     */
    id: number,
    xOrganizationId: any,
  }): Observable<DeviceResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/device/{id}',
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
   * Update a device.
   * @returns void
   * @throws ApiError
   */
  public putApiTenantAdminDevice({
    id,
    xOrganizationId,
    requestBody,
  }: {
    /**
     * Device Id.
     */
    id: number,
    xOrganizationId: any,
    requestBody?: UpdateDeviceRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/tenant-admin/device/{id}',
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
   * Delete Device
   * @returns void
   * @throws ApiError
   */
  public deleteApiTenantAdminDevice({
    id,
    xOrganizationId,
  }: {
    id: number,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/tenant-admin/device/{id}',
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
   * Get a list of all the devices in the system
   * @returns QueryDevicesResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminDevices({
    xOrganizationId,
    q,
    state,
    includeEndedAssociations,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    xOrganizationId: any,
    q?: string,
    state?: number,
    includeEndedAssociations?: boolean,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryDevicesResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/devices',
      headers: {
        'X-OrganizationId': xOrganizationId,
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
   * Create device for your tenant.
   * @returns CreateDeviceResponse Created
   * @throws ApiError
   */
  public postApiTenantAdminDevice({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: CreateDeviceForTenantRequest,
  }): Observable<CreateDeviceResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/device',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Update device state.
   * @returns void
   * @throws ApiError
   */
  public putApiTenantAdminDeviceState({
    id,
    state,
  }: {
    id: number,
    state: number,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/tenant-admin/device/{id}/state/{state}',
      path: {
        'id': id,
        'state': state,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns CertificateAndKeys Success
   * @throws ApiError
   */
  public getApiTenantAdminDeviceCertificateGenerate({
    id,
  }: {
    id: number,
  }): Observable<CertificateAndKeys> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/device/{id}/certificate/generate',
      path: {
        'id': id,
      },
    });
  }
  /**
   * @returns SaveDeviceDataResponse Success
   * @throws ApiError
   */
  public postApiTenantAdminDeviceData({
    requestBody,
  }: {
    requestBody?: SaveDeviceDataRequest,
  }): Observable<SaveDeviceDataResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/device/data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
