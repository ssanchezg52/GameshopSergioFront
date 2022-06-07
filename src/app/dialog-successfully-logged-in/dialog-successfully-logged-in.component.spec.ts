import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuccessfullyLoggedInComponent } from './dialog-successfully-logged-in.component';

describe('DialogSuccessfullyLoggedInComponent', () => {
  let component: DialogSuccessfullyLoggedInComponent;
  let fixture: ComponentFixture<DialogSuccessfullyLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSuccessfullyLoggedInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSuccessfullyLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
