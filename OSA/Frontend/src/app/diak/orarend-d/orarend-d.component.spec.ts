import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrarendDComponent } from './orarend-d.component';

describe('OrarendDComponent', () => {
  let component: OrarendDComponent;
  let fixture: ComponentFixture<OrarendDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrarendDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrarendDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
