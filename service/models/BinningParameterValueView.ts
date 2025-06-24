/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataPoint } from './DataPoint';
export type BinningParameterValueView = {
  id?: number;
  reference?: string | null;
  parameterKey?: string | null;
  patientId?: number;
  deviceId?: number;
  startTimestamp?: number;
  endTimestamp?: number;
  unitMeasure?: string | null;
  notes?: string | null;
  dataPoints?: Array<DataPoint> | null;
};

