import { Injectable, inject, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteService {
  private readonly router = inject(Router);
  readonly activeRoute = signal<string>('');

  constructor() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.activeRoute.set(e.urlAfterRedirects);
      }
    });
  }
}
