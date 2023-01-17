import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyHassComponent } from './proxy-hass.component';

describe('ProxyHassComponent', () => {
  let component: ProxyHassComponent;
  let fixture: ComponentFixture<ProxyHassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProxyHassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProxyHassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
