import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdatokTComponent } from './adatok-t.component';

describe('AdatokTComponent', () => {
  let component: AdatokTComponent;
  let fixture: ComponentFixture<AdatokTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdatokTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdatokTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
