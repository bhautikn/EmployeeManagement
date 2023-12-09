import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmNevComponent } from './epm-nev.component';

describe('EpmNevComponent', () => {
  let component: EpmNevComponent;
  let fixture: ComponentFixture<EpmNevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpmNevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpmNevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
