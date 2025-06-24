/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseUserResponse } from './BaseUserResponse';
export type InfoResponse = {
  availableLanguages?: Array<string> | null;
  currentLanguage?: string | null;
  translations?: Record<string, string | null> | null;
  permissions?: Array<string> | null;
  userInfo?: BaseUserResponse;
};

