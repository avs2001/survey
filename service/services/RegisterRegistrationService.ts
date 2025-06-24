/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { InvitationRequest } from '../models/InvitationRequest';
import type { RegisterTenantRequest } from '../models/RegisterTenantRequest';
import type { ResourceIdResponse } from '../models/ResourceIdResponse';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class RegisterRegistrationService {
  protected readonly http = inject(HttpClient);
  /**
   * Register a tenant with a tenant admin based on an invitation code.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public postApiRegisterTenant({
    requestBody,
  }: {
    requestBody?: RegisterTenantRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/register/tenant',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public postApiRegisterRequestInvite({
    requestBody,
  }: {
    requestBody?: InvitationRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/register/request-invite',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
