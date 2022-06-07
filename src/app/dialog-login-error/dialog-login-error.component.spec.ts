import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoginErrorComponent } from './dialog-login-error.component';

describe('DialogLoginErrorComponent', () => {
  let component: DialogLoginErrorComponent;
  let fixture: ComponentFixture<DialogLoginErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLoginErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLoginErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
