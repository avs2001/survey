/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserRequest } from './CreateUserRequest';
export type CreateTenantRequest = {
  tenancyName: string;
  countryCode?: string | null;
  admin?: CreateUserRequest;
};

