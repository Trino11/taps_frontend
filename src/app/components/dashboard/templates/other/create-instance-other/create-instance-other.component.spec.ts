import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInstanceOtherComponent } from './create-instance-other.component';

describe('CreateInstanceOtherComponent', () => {
  let component: CreateInstanceOtherComponent;
  let fixture: ComponentFixture<CreateInstanceOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInstanceOtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInstanceOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
