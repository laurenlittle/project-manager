import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // private projects: Project[] = [
  //   {
  //     id: '1',
  //     title: 'Project One',
  //     details: 'Here are some Details',
  //     percentComplete: 20,
  //     approved: false
  //   },
  //   {
  //     id: '2',
  //     title: 'Project Two',
  //     details: 'This is a sample project',
  //     percentComplete: 40,
  //     approved: false
  //   },
  //   {
  //     id: '3',
  //     title: 'Project Three',
  //     details: 'This is a sample project',
  //     percentComplete: 100,
  //     approved: true
  //   }
  // ];

  model = 'projects';
  constructor(private httpClient: HttpClient) { }

  // Convenience Methods
  getUrl() {
    return `${BASE_URL}`;
  }

  getUrlForId(projectId) {
    return `${BASE_URL}/${projectId}`;
  }

  //  ----------------
  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  update(project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(projectId) {
    return this.httpClient.delete(this.getUrlForId(projectId));
  }
}
