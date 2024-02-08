import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistTComponent } from './regist-t.component';

describe('RegistTComponent', () => {
  let component: RegistTComponent;
  let fixture: ComponentFixture<RegistTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
