import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmsummaryComponent } from './order-confirmsummary.component';

describe('OrderConfirmsummaryComponent', () => {
  let component: OrderConfirmsummaryComponent;
  let fixture: ComponentFixture<OrderConfirmsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderConfirmsummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
