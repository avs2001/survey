import { Injectable, inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { openDB } from 'idb';
import { ConnectionStatusService } from '../../shell/services/connection-status.service';

export interface List { id: string; title: string; }

@Injectable({ providedIn: 'root' })
export class ListService {
  private readonly http = inject(HttpClient);
  private readonly connection = inject(ConnectionStatusService);

  readonly lists = signal<List[]>([]);
  readonly syncInProgress = signal(false);
  readonly lastSync = signal<Date | null>(null);
  readonly listErrors = signal<string | null>(null);

  private dbPromise = openDB('lists-db', 1, {
    upgrade(db) {
      db.createObjectStore('lists', { keyPath: 'id' });
    }
  });

  constructor() {
    this.load();
    if (this.connection.online()) {
      this.sync();
    }
    effect(() => {
      if (this.connection.online()) {
        this.sync();
      }
    });
  }

  private async load() {
    const db = await this.dbPromise;
    const all = await db.getAll('lists');
    this.lists.set(all as List[]);
  }

  async addList(title: string) {
    const list: List = { id: crypto.randomUUID(), title };
    this.lists.update(lists => [...lists, list]);
    const db = await this.dbPromise;
    await db.put('lists', list);
    if (this.connection.online()) {
      await this.http.post('/lists', list).toPromise();
    }
  }

  private async sync() {
    this.syncInProgress.set(true);
    try {
      const serverLists = await this.http.get<List[]>('/lists').toPromise();
      const allLists = serverLists ?? [];
      this.lists.set(allLists);
      const db = await this.dbPromise;
      const tx = db.transaction('lists', 'readwrite');
      await Promise.all(allLists.map(l => tx.store.put(l)));
      await tx.done;
      this.lastSync.set(new Date());
    } catch (e) {
      this.listErrors.set(String(e));
    }
    this.syncInProgress.set(false);
  }
}
