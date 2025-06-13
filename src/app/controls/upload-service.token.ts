import { InjectionToken } from '@angular/core';

export interface UploadService {
  upload(file: File): Promise<void>;
}

export const UPLOAD_SERVICE = new InjectionToken<UploadService>('UPLOAD_SERVICE');
