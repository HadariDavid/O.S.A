import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulasztasokComponent } from './mulasztasok.component';

describe('MulasztasokComponent', () => {
  let component: MulasztasokComponent;
  let fixture: ComponentFixture<MulasztasokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MulasztasokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MulasztasokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
