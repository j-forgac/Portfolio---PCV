import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosacekComponent } from './kosacek.component';

describe('KosacekComponent', () => {
  let component: KosacekComponent;
  let fixture: ComponentFixture<KosacekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KosacekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KosacekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
