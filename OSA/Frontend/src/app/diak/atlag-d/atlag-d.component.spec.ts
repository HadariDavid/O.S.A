import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlagDComponent } from './atlag-d.component';

describe('AtlagDComponent', () => {
  let component: AtlagDComponent;
  let fixture: ComponentFixture<AtlagDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlagDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtlagDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
