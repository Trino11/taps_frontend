import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInstanceMinecraftComponent } from './create-instance-minecraft.component';

describe('CreateInstanceMinecraftComponent', () => {
  let component: CreateInstanceMinecraftComponent;
  let fixture: ComponentFixture<CreateInstanceMinecraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInstanceMinecraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInstanceMinecraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
