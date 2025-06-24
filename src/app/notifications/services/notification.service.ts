import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { openDB } from 'idb';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly http = inject(HttpClient);
  readonly notificationsEnabled = signal(false);
  readonly reminders = signal<string[]>([]);

  private dbPromise = openDB('notifications-db', 1, {
    upgrade(db) {
      db.createObjectStore('prefs');
    }
  });

  constructor() {
    this.load();
  }

  private async load() {
    const db = await this.dbPromise;
    const enabled = await db.get('prefs', 'enabled');
    const reminders = await db.get('prefs', 'reminders');
    this.notificationsEnabled.set(enabled ?? false);
    this.reminders.set(reminders ?? []);
  }

  async toggle(enabled: boolean) {
    this.notificationsEnabled.set(enabled);
    const db = await this.dbPromise;
    await db.put('prefs', enabled, 'enabled');
    if (enabled) {
      await this.http.post('/notifications/preferences', { enabled }).toPromise();
    }
  }

  async schedule(time: string) {
    const next = [...this.reminders(), time];
    this.reminders.set(next);
    const db = await this.dbPromise;
    await db.put('prefs', next, 'reminders');
    await this.http.post('/notifications/preferences', { reminders: next }).toPromise();
  }
}
