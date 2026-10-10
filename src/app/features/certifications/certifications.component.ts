import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { Certification } from '../../core/models';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent implements OnInit {
  dataService = inject(DataService);
  certifications = signal<Certification[]>([]);
  hoveredId = signal<number | null>(null);

  ngOnInit() {
    this.dataService.getCertifications().subscribe(c => this.certifications.set(c));
  }
}
