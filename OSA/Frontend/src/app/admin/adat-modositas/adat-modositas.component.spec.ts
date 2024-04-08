import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdatModositasComponent } from './adat-modositas.component';

describe('AdatModositasComponent', () => {
  let component: AdatModositasComponent;
  let fixture: ComponentFixture<AdatModositasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdatModositasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdatModositasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
