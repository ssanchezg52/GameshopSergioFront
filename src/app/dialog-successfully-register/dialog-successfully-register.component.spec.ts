import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuccessfullyRegisterComponent } from './dialog-successfully-register.component';

describe('DialogSuccessfullyRegisterComponent', () => {
  let component: DialogSuccessfullyRegisterComponent;
  let fixture: ComponentFixture<DialogSuccessfullyRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSuccessfullyRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSuccessfullyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
