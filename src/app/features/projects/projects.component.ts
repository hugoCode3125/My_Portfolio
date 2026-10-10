
import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { Project } from '../../core/models';

type ProjectFilter = 'all' | 'experience';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  private dataService = inject(DataService);

  // Conserve toujours la liste complète des projets
  projects = signal<Project[]>([]);

  // Par défaut, afficher uniquement les projets universitaires
  filter = signal<ProjectFilter>('all');

  // Recalcule automatiquement les projets affichés
  filteredProjects = computed(() => {
    const allProjects = this.projects();

    if (this.filter() === 'experience') {
      return allProjects.filter(project => project.experience === true);
    }

    return allProjects.filter(project => project.experience !== true);
  });

  ngOnInit(): void {
    this.dataService.getProjects().subscribe({
      next: (projects) => {
        this.projects.set(projects);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des projets :', error);
      }
    });
  }

  setFilter(filter: ProjectFilter): void {
    this.filter.set(filter);
  }
}
