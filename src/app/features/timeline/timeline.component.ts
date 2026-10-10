import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { TimelineItem } from '../../core/models';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  dataService = inject(DataService);
  items = signal<TimelineItem[]>([]);

  ngOnInit() {
    this.dataService.getTimeline().subscribe(t => this.items.set(t));
  }
}
