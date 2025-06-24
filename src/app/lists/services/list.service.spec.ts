import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListService } from './list.service';
import { ConnectionStatusService } from '../../shell/services/connection-status.service';

class FakeConnection {
  online = signal(true);
}

describe('ListService', () => {
  let service: ListService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListService, { provide: ConnectionStatusService, useClass: FakeConnection }]
    });
    service = TestBed.inject(ListService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should load lists', async () => {
    service['sync'] = jasmine.createSpy();
    await service.addList('test');
    expect(service.lists().length).toBe(1);
  });
});
