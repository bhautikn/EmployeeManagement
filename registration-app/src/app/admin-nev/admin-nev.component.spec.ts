import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNevComponent } from './admin-nev.component';

describe('AdminNevComponent', () => {
  let component: AdminNevComponent;
  let fixture: ComponentFixture<AdminNevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminNevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminNevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
