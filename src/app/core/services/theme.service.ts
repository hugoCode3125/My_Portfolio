import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _isDark = signal<boolean>(true);
  isDark = this._isDark.asReadonly();

  constructor() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this._isDark.set(saved ? saved === 'dark' : prefersDark);
    this.applyTheme();
  }

  toggle(): void {
    this._isDark.update(v => !v);
    this.applyTheme();
    localStorage.setItem('theme', this._isDark() ? 'dark' : 'light');
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this._isDark() ? 'dark' : 'light');
  }
}
