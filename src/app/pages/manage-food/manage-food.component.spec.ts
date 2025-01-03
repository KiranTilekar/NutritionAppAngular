import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFoodComponent } from './manage-food.component';

describe('ManageFoodComponent', () => {
  let component: ManageFoodComponent;
  let fixture: ComponentFixture<ManageFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
