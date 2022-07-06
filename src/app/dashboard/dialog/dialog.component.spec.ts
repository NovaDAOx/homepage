import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dialogComponent } from './dialog.component';

describe('dialogComponent', () => {
  let component: dialogComponent;
  let fixture: ComponentFixture<dialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ dialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
