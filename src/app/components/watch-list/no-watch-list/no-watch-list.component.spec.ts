import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoWatchListComponent } from './no-watch-list.component';

describe('NoWatchListComponent', () => {
  let component: NoWatchListComponent;
  let fixture: ComponentFixture<NoWatchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoWatchListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoWatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
