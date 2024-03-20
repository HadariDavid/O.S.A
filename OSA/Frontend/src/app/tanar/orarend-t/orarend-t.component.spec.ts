import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrarendTComponent } from './orarend-t.component';

describe('OrarendTComponent', () => {
  let component: OrarendTComponent;
  let fixture: ComponentFixture<OrarendTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrarendTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrarendTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
