import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { openDB } from 'idb';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private readonly http = inject(HttpClient);
  readonly categories = signal<string[]>([]);

  private dbPromise = openDB('categories-db', 1, {
    upgrade(db) {
      db.createObjectStore('categories');
    }
  });

  constructor() {
    this.load();
    this.fetch();
  }

  private async load() {
    const db = await this.dbPromise;
    const all = await db.getAll('categories');
    this.categories.set(all as string[]);
  }

  async fetch() {
    const cats = await this.http.get<string[]>('/categories').toPromise() ?? [];
    this.categories.set(cats);
    const db = await this.dbPromise;
    const tx = db.transaction('categories', 'readwrite');
    await Promise.all(cats.map(c => tx.store.put(c, c)));
    await tx.done;
  }
}
