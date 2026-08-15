import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionManagementComponent } from './commission-management.component';

describe('CommissionManagementComponent', () => {
  let component: CommissionManagementComponent;
  let fixture: ComponentFixture<CommissionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommissionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
