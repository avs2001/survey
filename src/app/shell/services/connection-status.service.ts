import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConnectionStatusService {
  readonly online = signal(typeof navigator !== 'undefined' ? navigator.onLine : true);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => this.online.set(true));
      window.addEventListener('offline', () => this.online.set(false));
    }
  }
}
