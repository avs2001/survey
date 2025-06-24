/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { CreateGroupRequest } from '../models/CreateGroupRequest';
import type { QueryGroupMembersResponse } from '../models/QueryGroupMembersResponse';
import type { QueryGroupsResponse } from '../models/QueryGroupsResponse';
import type { ResourceIdResponse } from '../models/ResourceIdResponse';
import type { UpdateGroupRequest } from '../models/UpdateGroupRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class TenantAdminGroupsService {
  protected readonly http = inject(HttpClient);
  /**
   * Check if group exists by name.
   * @returns void
   * @throws ApiError
   */
  public headApiTenantAdminGroupExists({
    name,
    xOrganizationId,
  }: {
    name: string,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'HEAD',
      url: '/api/tenant-admin/group/{name}/exists',
      path: {
        'name': name,
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
   * Create group for your tenant.
   * @returns ResourceIdResponse Created
   * @throws ApiError
   */
  public postApiTenantAdminGroup({
    xOrganizationId,
    requestBody,
  }: {
    xOrganizationId: any,
    requestBody?: CreateGroupRequest,
  }): Observable<ResourceIdResponse> {
    return __request(OpenAPI, this.http, {
      method: 'POST',
      url: '/api/tenant-admin/group',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Update group by id.
   * @returns void
   * @throws ApiError
   */
  public putApiTenantAdminGroup({
    id,
    xOrganizationId,
    requestBody,
  }: {
    id: number,
    xOrganizationId: any,
    requestBody?: UpdateGroupRequest,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/tenant-admin/group/{id}',
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
   * Delete group.
   * @returns void
   * @throws ApiError
   */
  public deleteApiTenantAdminGroup({
    id,
    xOrganizationId,
  }: {
    id: number,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/tenant-admin/group/{id}',
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
   * Query the groups for your tenant.
   * @returns QueryGroupsResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminGroups({
    xOrganizationId,
  }: {
    xOrganizationId: any,
  }): Observable<QueryGroupsResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/groups',
      headers: {
        'X-OrganizationId': xOrganizationId,
      },
    });
  }
  /**
   * Add user to a group.
   * @returns void
   * @throws ApiError
   */
  public putApiTenantAdminGroupUserMember({
    groupId,
    organizationUserId,
    xOrganizationId,
  }: {
    groupId: number,
    organizationUserId: number,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'PUT',
      url: '/api/tenant-admin/group/{groupId}/user/{organizationUserId}/member',
      path: {
        'groupId': groupId,
        'organizationUserId': organizationUserId,
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
   * Remove user from group.
   * @returns void
   * @throws ApiError
   */
  public deleteApiTenantAdminGroupUserMember({
    groupId,
    organizationUserId,
    xOrganizationId,
  }: {
    groupId: number,
    organizationUserId: number,
    xOrganizationId: any,
  }): Observable<void> {
    return __request(OpenAPI, this.http, {
      method: 'DELETE',
      url: '/api/tenant-admin/group/{groupId}/user/{organizationUserId}/member',
      path: {
        'groupId': groupId,
        'organizationUserId': organizationUserId,
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
   * Query group members.
   * @returns QueryGroupMembersResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminGroupMembers({
    groupId,
    xOrganizationId,
    q,
    userType,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    groupId: number,
    xOrganizationId: any,
    q?: string,
    userType?: number,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryGroupMembersResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/group/{groupId}/members',
      path: {
        'groupId': groupId,
      },
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
   * Query group non members.
   * @returns QueryGroupMembersResponse Success
   * @throws ApiError
   */
  public getApiTenantAdminGroupNonmembers({
    groupId,
    xOrganizationId,
    q,
    userType,
    page,
    pageSize,
    orderBy,
    direction,
  }: {
    groupId: number,
    xOrganizationId: any,
    q?: string,
    userType?: number,
    page?: number,
    pageSize?: number,
    orderBy?: string,
    direction?: string,
  }): Observable<QueryGroupMembersResponse> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/api/tenant-admin/group/{groupId}/nonmembers',
      path: {
        'groupId': groupId,
      },
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
}
