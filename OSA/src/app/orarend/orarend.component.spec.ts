import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrarendComponent } from './orarend.component';

describe('OrarendComponent', () => {
  let component: OrarendComponent;
  let fixture: ComponentFixture<OrarendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrarendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrarendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
