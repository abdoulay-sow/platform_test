import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDomainComponent } from './login-domain.component';

describe('LoginDomainComponent', () => {
  let component: LoginDomainComponent;
  let fixture: ComponentFixture<LoginDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
