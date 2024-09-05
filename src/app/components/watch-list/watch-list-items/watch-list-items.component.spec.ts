import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListItemsComponent } from './watch-list-items.component';

describe('WatchListItemsComponent', () => {
  let component: WatchListItemsComponent;
  let fixture: ComponentFixture<WatchListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchListItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
