import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyhledavaniComponent } from './vyhledavani.component';

describe('VyhledavaniComponent', () => {
  let component: VyhledavaniComponent;
  let fixture: ComponentFixture<VyhledavaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VyhledavaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VyhledavaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
