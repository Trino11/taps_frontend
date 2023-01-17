import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeUserFormComponent } from './subscribe-user-form.component';

describe('SubscribeUserFormComponent', () => {
  let component: SubscribeUserFormComponent;
  let fixture: ComponentFixture<SubscribeUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeUserFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
