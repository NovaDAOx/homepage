import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationpageComponent } from './applicationpage.component';

describe('ApplicationpageComponent', () => {
  let component: ApplicationpageComponent;
  let fixture: ComponentFixture<ApplicationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
