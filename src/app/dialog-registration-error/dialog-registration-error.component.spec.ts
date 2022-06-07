import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegistrationErrorComponent } from './dialog-registration-error.component';

describe('DialogRegistrationErrorComponent', () => {
  let component: DialogRegistrationErrorComponent;
  let fixture: ComponentFixture<DialogRegistrationErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRegistrationErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRegistrationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
