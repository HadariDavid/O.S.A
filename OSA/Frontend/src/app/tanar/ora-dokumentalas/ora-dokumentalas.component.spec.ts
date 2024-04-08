import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OraDokumentalasComponent } from './ora-dokumentalas.component';

describe('OraDokumentalasComponent', () => {
  let component: OraDokumentalasComponent;
  let fixture: ComponentFixture<OraDokumentalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OraDokumentalasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OraDokumentalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
