/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetHcpPatientValuesRequest = {
  patientId: number;
  xOrganizationId: any;
  parameterKey?: Array<string>;
  reference?: string;
  page?: number;
  pageSize?: number;
  orderBy?: string;
  direction?: string;
  startTimestamp?: number;
  endTimestamp?: number;
  q?: string;
};
