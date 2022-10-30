import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakedNFTSComponent } from './staked-nfts.component';

describe('StakedNFTSComponent', () => {
  let component: StakedNFTSComponent;
  let fixture: ComponentFixture<StakedNFTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakedNFTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakedNFTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
