import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { Profile } from '../../core/models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  dataService = inject(DataService);
  profile = signal<Profile | null>(null);
  year = new Date().getFullYear();

  ngOnInit() {
    this.dataService.getProfile().subscribe(p => this.profile.set(p));
  }
}
