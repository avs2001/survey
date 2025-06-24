import { fakeAsync, tick } from '@angular/core/testing';
import { ConnectionStatusService } from './connection-status.service';

describe('ConnectionStatusService', () => {
  it('should emit online changes', fakeAsync(() => {
    const service = new ConnectionStatusService();
    expect(service.online()).toBe(navigator.onLine);
    window.dispatchEvent(new Event('offline'));
    tick();
    expect(service.online()).toBeFalse();
    window.dispatchEvent(new Event('online'));
    tick();
    expect(service.online()).toBeTrue();
  }));
});
