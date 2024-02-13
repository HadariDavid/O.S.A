import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistDComponent } from './regist-d.component';

describe('RegistDComponent', () => {
  let component: RegistDComponent;
  let fixture: ComponentFixture<RegistDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
