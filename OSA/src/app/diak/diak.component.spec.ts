import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiakComponent } from './diak.component';

describe('DiakComponent', () => {
  let component: DiakComponent;
  let fixture: ComponentFixture<DiakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
