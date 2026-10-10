import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { Profile } from '../../core/models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  dataService = inject(DataService);
  profile = signal<Profile | null>(null);

  ngOnInit() {
    this.dataService.getProfile().subscribe(p => this.profile.set(p));
  }
}
