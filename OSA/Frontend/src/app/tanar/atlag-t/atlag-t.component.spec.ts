import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlagTComponent } from './atlag-t.component';

describe('AtlagTComponent', () => {
  let component: AtlagTComponent;
  let fixture: ComponentFixture<AtlagTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlagTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtlagTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
