import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyperComponent } from './skyper.component';

describe('SkyperComponent', () => {
  let component: SkyperComponent;
  let fixture: ComponentFixture<SkyperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
