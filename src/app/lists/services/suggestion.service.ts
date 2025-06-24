import { Injectable, inject, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { openDB } from 'idb';
import { ItemService } from './item.service';

@Injectable({ providedIn: 'root' })
export class SuggestionService {
  private readonly http = inject(HttpClient);
  private readonly items = inject(ItemService).items;
  private dbPromise = openDB('suggestions-db', 1, {
    upgrade(db) {
      db.createObjectStore('suggestions');
    }
  });

  protected cache = signal<string[]>([]);

  readonly suggestions = computed(() => {
    const current = Object.values(this.items()).flat();
    return this.cache().filter(s => !current.find(i => i.name === s));
  });

  constructor() {
    this.load();
    this.refresh();
  }

  private async load() {
    const db = await this.dbPromise;
    const all = await db.getAll('suggestions');
    this.cache.set(all as string[]);
  }

  async refresh() {
    const list = await this.http.get<string[]>('/suggestions').toPromise() ?? [];
    this.cache.set(list);
    const db = await this.dbPromise;
    const tx = db.transaction('suggestions', 'readwrite');
    await Promise.all(list.map(s => tx.store.put(s, s)));
    await tx.done;
  }
}
