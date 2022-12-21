/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BimdingComponent } from './bimding.component';

describe('BimdingComponent', () => {
  let component: BimdingComponent;
  let fixture: ComponentFixture<BimdingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BimdingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BimdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
