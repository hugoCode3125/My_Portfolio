import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { SkillCategory } from '../../core/models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  dataService = inject(DataService);
  skillCategories = signal<SkillCategory[]>([]);
  activeCategory = signal<string>('');

  ngOnInit() {
    this.dataService.getSkills().subscribe(s => {
      this.skillCategories.set(s);
      if (s.length) this.activeCategory.set(s[0].category);
    });
  }

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }

  get activeCategoryData() {
    return this.skillCategories().find(c => c.category === this.activeCategory()) ?? null;
  }
}
