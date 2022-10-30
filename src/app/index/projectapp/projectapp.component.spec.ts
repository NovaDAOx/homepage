import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectappComponent } from './projectapp.component';

describe('ProjectappComponent', () => {
  let component: ProjectappComponent;
  let fixture: ComponentFixture<ProjectappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
