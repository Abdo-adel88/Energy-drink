import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCanComponent } from './date-can.component';

describe('DateCanComponent', () => {
  let component: DateCanComponent;
  let fixture: ComponentFixture<DateCanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateCanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
