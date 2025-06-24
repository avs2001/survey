/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseParameterResponse } from './BaseParameterResponse';
export type PatientQueryDataSourcesResult = {
  id?: number;
  name?: string | null;
  key?: string | null;
  action?: string | null;
  isCloudDatasource?: boolean;
  parameters?: Array<BaseParameterResponse> | null;
  cloudAccountConnectionStatus?: string | null;
};

