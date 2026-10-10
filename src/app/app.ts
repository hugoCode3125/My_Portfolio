import { Component, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { CertificationsComponent } from './features/certifications/certifications.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';
import { BackToTopComponent } from './shared/components/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificationsComponent,
    TimelineComponent,
    ContactComponent,
    FooterComponent,
    BackToTopComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  loading = signal(true);

  ngAfterViewInit() {
    setTimeout(() => this.loading.set(false), 900);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    setTimeout(() => {
      document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    }, 1000);
  }
}
