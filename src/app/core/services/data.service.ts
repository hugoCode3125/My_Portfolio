import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile, SkillCategory, Project, Certification, TimelineItem } from '../models';

@Injectable({ providedIn: 'root' })
export class DataService {
  private base = '/assets/data';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.base}/profile.json`);
  }

  getSkills(): Observable<SkillCategory[]> {
    return this.http.get<SkillCategory[]>(`${this.base}/skills.json`);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.base}/projects.json`);
  }

  getCertifications(): Observable<Certification[]> {
    return this.http.get<Certification[]>(`${this.base}/certifications.json`);
  }

  getTimeline(): Observable<TimelineItem[]> {
    return this.http.get<TimelineItem[]>(`${this.base}/timeline.json`);
  }
}
