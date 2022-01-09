import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetailsProgramComponent } from './setails-program.component';

describe('SetailsProgramComponent', () => {
  let component: SetailsProgramComponent;
  let fixture: ComponentFixture<SetailsProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetailsProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetailsProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
