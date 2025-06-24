import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly tokenKey = 'token';

  readonly currentUser = signal<User | null>(null);

  constructor() {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      // decode token for user info if needed
      this.currentUser.set({ id: '', email: '' });
    }
  }

  signup(data: { email: string; password: string }) {
    return this.http.post<User & { token: string }>('/users', data).subscribe(res => {
      localStorage.setItem(this.tokenKey, res.token);
      this.currentUser.set({ id: res.id, email: res.email });
    });
  }

  login(data: { email: string; password: string }) {
    return this.http.post<User & { token: string }>('/login', data).subscribe(res => {
      localStorage.setItem(this.tokenKey, res.token);
      this.currentUser.set({ id: res.id, email: res.email });
    });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.currentUser.set(null);
  }

  get token() {
    return localStorage.getItem(this.tokenKey) ?? '';
  }
}
