/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { QueryInvitationsResult } from '../models/QueryInvitationsResult';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class AdminInvitationCodeService {
  protected readonly http = inject(HttpClient);
  /**
   * Get a list of all the invitations codes
   * Status = requested, approved, activated
   * @returns QueryInvitationsResult Success
   * @throws ApiError
   */
  public getApiAdminInvitationCode({
    q,
    status,
    receiveUpdatesConsent,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    q?: string,
    status?: Array<string>,
    receiveUpdatesConsent?: boolean,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryInvitationsResult> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/admin/invitation-code',
      query: {
        'Q': q,
        'Status': status,
        'ReceiveUpdatesConsent': receiveUpdatesConsent,
        'Page': page,
        'PageSize': pageSize,
        'OrderBy': orderBy,
        'Direction': direction,
      },
    });
  }
  /**
   * Approves a invitation code.
   * @returns void
   * @throws ApiError
   */
  public putApiAdminInvitationCodeSend({
    invitationCodeId,
  }: {
    invitationCodeId: number,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/admin/invitation-code/{invitationCodeId}/send',
      path: {
        'invitationCodeId': invitationCodeId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
}
