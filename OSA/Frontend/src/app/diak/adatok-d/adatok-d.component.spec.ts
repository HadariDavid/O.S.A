import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdatokDComponent } from './adatok-d.component';

describe('AdatokDComponent', () => {
  let component: AdatokDComponent;
  let fixture: ComponentFixture<AdatokDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdatokDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdatokDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
