import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEnvironmentComponent } from './set-environment.component';

describe('SetEnvironmentComponent', () => {
  let component: SetEnvironmentComponent;
  let fixture: ComponentFixture<SetEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetEnvironmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
