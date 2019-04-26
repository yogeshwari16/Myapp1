import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrevilagesComponent } from './add-previlages.component';

describe('AddPrevilagesComponent', () => {
  let component: AddPrevilagesComponent;
  let fixture: ComponentFixture<AddPrevilagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrevilagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrevilagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
