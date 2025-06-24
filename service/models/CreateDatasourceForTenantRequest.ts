/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateParametersForDatasourceRequest } from './CreateParametersForDatasourceRequest';
export type CreateDatasourceForTenantRequest = {
  datasourceKey?: string | null;
  datasourceName: string;
  datasourceAction: string;
  remoteActionEndpoint?: string | null;
  remoteActionSecret?: string | null;
  parameters: Array<CreateParametersForDatasourceRequest>;
};

