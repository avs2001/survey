import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { openDB } from 'idb';
import { ConnectionStatusService } from '../../shell/services/connection-status.service';

export interface Item { id: string; name: string; listId: string; category?: string; completed?: boolean; }

@Injectable({ providedIn: 'root' })
export class ItemService {
  private readonly http = inject(HttpClient);
  private readonly connection = inject(ConnectionStatusService);
  readonly items = signal<Record<string, Item[]>>({});
  readonly syncInProgress = signal(false);
  readonly lastSync = signal<Date | null>(null);

  private dbPromise = openDB('items-db', 1, {
    upgrade(db) {
      db.createObjectStore('items', { keyPath: 'id' });
    }
  });

  constructor() {
    this.load();
    if (this.connection.online()) {
      this.sync();
    }
    this.connection.online.subscribe(o => { if (o) this.sync(); });
  }

  private async load() {
    const db = await this.dbPromise;
    const all = await db.getAll('items');
    const grouped: Record<string, Item[]> = {};
    (all as Item[]).forEach(i => {
      grouped[i.listId] = grouped[i.listId] || [];
      grouped[i.listId].push(i);
    });
    this.items.set(grouped);
  }

  async addItem(listId: string, name: string) {
    const item: Item = { id: crypto.randomUUID(), name, listId };
    this.items.update(items => {
      const arr = items[listId] || [];
      return { ...items, [listId]: [...arr, item] };
    });
    const db = await this.dbPromise;
    await db.put('items', item);
    if (this.connection.online()) {
      await this.http.post(`/lists/${listId}/items`, item).toPromise();
    }
  }

  private async sync() {
    this.syncInProgress.set(true);
    try {
      // simplified sync
      this.lastSync.set(new Date());
    } finally {
      this.syncInProgress.set(false);
    }
  }
}
