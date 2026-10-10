import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { Profile } from '../../core/models';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  dataService = inject(DataService);
  scrollService = inject(ScrollService);

  profile = signal<Profile | null>(null);

  ngOnInit() {
    this.dataService.getProfile().subscribe(p => this.profile.set(p));
  }

  scrollToContact() {
    this.scrollService.scrollTo('contact');
  }

  scrollToProjects() {
    this.scrollService.scrollTo('projects');
  }
}
