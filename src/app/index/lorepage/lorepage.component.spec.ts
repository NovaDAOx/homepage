import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorepageComponent } from './lorepage.component';

describe('LorepageComponent', () => {
  let component: LorepageComponent;
  let fixture: ComponentFixture<LorepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LorepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LorepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
