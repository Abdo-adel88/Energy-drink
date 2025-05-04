import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkHomeComponent } from './drink-home.component';

describe('DrinkHomeComponent', () => {
  let component: DrinkHomeComponent;
  let fixture: ComponentFixture<DrinkHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
