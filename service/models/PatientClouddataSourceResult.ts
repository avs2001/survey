/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseParameterResponse } from './BaseParameterResponse';
export type PatientClouddataSourceResult = {
  id?: number;
  name?: string | null;
  key?: string | null;
  action?: string | null;
  isCloudDatasource?: boolean;
  parameters?: Array<BaseParameterResponse> | null;
  cloudDataSourceTemplateId?: string | null;
  maskedClientId?: string | null;
  authorizationUri?: string | null;
  tokenUri?: string | null;
  redirectUri?: string | null;
  userInfoUri?: string | null;
  cloudAccountConnectionStatus?: string | null;
};

