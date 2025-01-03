import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMealComponent } from './make-meal.component';

describe('MakeMealComponent', () => {
  let component: MakeMealComponent;
  let fixture: ComponentFixture<MakeMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeMealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
