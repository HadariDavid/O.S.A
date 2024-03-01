import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanarComponent } from './tanar.component';

describe('TanarComponent', () => {
  let component: TanarComponent;
  let fixture: ComponentFixture<TanarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TanarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
