import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitroCanComponent } from './nitro-can.component';

describe('NitroCanComponent', () => {
  let component: NitroCanComponent;
  let fixture: ComponentFixture<NitroCanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NitroCanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NitroCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
