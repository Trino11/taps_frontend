import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInstanceFormComponent } from './update-instance-form.component';

describe('UpdateInstanceFormComponent', () => {
  let component: UpdateInstanceFormComponent;
  let fixture: ComponentFixture<UpdateInstanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInstanceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInstanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
