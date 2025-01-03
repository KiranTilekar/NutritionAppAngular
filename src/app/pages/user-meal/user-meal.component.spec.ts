import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMealComponent } from './user-meal.component';

describe('UserMealComponent', () => {
  let component: UserMealComponent;
  let fixture: ComponentFixture<UserMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
