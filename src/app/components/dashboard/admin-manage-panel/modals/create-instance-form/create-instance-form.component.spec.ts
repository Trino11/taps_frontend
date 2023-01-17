import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInstanceFormComponent } from './create-instance-form.component';

describe('CreateInstanceFormComponent', () => {
  let component: CreateInstanceFormComponent;
  let fixture: ComponentFixture<CreateInstanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInstanceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInstanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
