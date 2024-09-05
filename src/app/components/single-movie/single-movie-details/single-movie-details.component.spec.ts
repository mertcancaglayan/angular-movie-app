import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMovieDetailsComponent } from './single-movie-details.component';

describe('SingleMovieDetailsComponent', () => {
  let component: SingleMovieDetailsComponent;
  let fixture: ComponentFixture<SingleMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleMovieDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
