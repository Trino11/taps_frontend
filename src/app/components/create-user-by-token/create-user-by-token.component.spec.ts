import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserByTokenComponent } from './create-user-by-token.component';

describe('CreateUserByTokenComponent', () => {
  let component: CreateUserByTokenComponent;
  let fixture: ComponentFixture<CreateUserByTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserByTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserByTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
