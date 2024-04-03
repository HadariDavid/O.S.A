import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsztalyokComponent } from './osztalyok.component';

describe('OsztalyokComponent', () => {
  let component: OsztalyokComponent;
  let fixture: ComponentFixture<OsztalyokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsztalyokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OsztalyokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
