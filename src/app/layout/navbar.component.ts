import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../core/services/theme.service';
import { ScrollService } from '../core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  scrollService = inject(ScrollService);

  scrolled = signal(false);
  menuOpen = signal(false);

  navItems = [
    { label: 'À Propos', section: 'about' },
    { label: 'Compétences', section: 'skills' },
    { label: 'Projets', section: 'projects' },
    { label: 'Certifications', section: 'certifications' },
    { label: 'Parcours', section: 'timeline' },
    { label: 'Contact', section: 'contact' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  navigate(section: string) {
    this.scrollService.scrollTo(section);
    this.menuOpen.set(false);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }
}
