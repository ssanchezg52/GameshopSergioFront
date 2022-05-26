import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGamesComponent } from './dialog-games.component';

describe('DialogGamesComponent', () => {
  let component: DialogGamesComponent;
  let fixture: ComponentFixture<DialogGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
