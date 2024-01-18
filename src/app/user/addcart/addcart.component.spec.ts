/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddcartComponent } from './addcart.component';

describe('AddcartComponent', () => {
  let component: AddcartComponent;
  let fixture: ComponentFixture<AddcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
