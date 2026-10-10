import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (visible()) {
      <button class="back-to-top" (click)="scrollTop()" title="Retour en haut">
        ↑
      </button>
    }
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 999;
      width: 44px;
      height: 44px;
      background: var(--accent);
      color: #fff;
      border: none;
      border-radius: 12px;
      font-size: 1.2rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(59,130,246,0.4);
      transition: all 0.2s ease;
      animation: fadeIn 0.3s ease;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 28px rgba(59,130,246,0.5);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class BackToTopComponent {
  visible = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.visible.set(window.scrollY > 400);
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
