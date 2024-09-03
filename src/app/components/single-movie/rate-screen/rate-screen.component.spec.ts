import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateScreenComponent } from './rate-screen.component';

describe('RateScreenComponent', () => {
  let component: RateScreenComponent;
  let fixture: ComponentFixture<RateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
