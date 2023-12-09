import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceComponent } from './attendence.component';

describe('AttendenceComponent', () => {
  let component: AttendenceComponent;
  let fixture: ComponentFixture<AttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
