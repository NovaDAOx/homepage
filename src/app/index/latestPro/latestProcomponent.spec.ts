import { ComponentFixture, TestBed } from '@angular/core/testing';

import { latestProComponent } from './latestPro.component';

describe('latestProComponent', () => {
  let component: latestProComponent;
  let fixture: ComponentFixture<latestProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ latestProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(latestProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
