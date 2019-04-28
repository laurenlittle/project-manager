import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from 'selenium-webdriver';
import { ProjectsService } from '@workshop/core-data';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let de =  fixture.debugElement; // Get the debug element aka the element the component lives on
  const emptyProject = {
    id: '',
    title: '',
    details: '',
    percentComplete: 0,
    approved: false,
  }
  let projectService: ProjectsService;
  const mockProjectService = {
    // mock of service here
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        ProjectListComponent,
        ProjectDetailsComponent
      ],
      providers: [
        {provide: ProjectsService, useValue: mockProjectService} // Inject the service, but override with the Mock
      ],
      imports: [
        ProjectsRoutingModule,
        MaterialModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance; // Get THE component instance
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should select a project', () => {
    component.selectProject(emptyProject);
    expect(component.selectProject).toBe(emptyProject);
  });

  // Access the template, query the DOM, pull that value, and evaluate it.
  it('should should display titleColor', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('green');
  });

  // Detecting Changes - color is set to red in the DOM, here we're changing to black
  it('should should display titleColor', () => {
    const h1 = de.query(By.css('h1'));
    component.titleColor = 'black';
    fixture.detectChanges(); // Manually force change detection
    expect(h1.nativeElement.innerText).toBe('black');
  });
});
