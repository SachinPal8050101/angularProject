import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chaild1Component } from './chaild1.component';

describe('Chaild1Component', () => {
  let component: Chaild1Component;
  let fixture: ComponentFixture<Chaild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chaild1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chaild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
