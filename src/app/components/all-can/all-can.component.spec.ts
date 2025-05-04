import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCanComponent } from './all-can.component';

describe('AllCanComponent', () => {
  let component: AllCanComponent;
  let fixture: ComponentFixture<AllCanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
