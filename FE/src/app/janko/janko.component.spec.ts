import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JankoComponent } from './janko.component';

describe('JankoComponent', () => {
  let component: JankoComponent;
  let fixture: ComponentFixture<JankoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JankoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JankoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
